using AutoMapper;
using ilmoitustaulu_server.DTOs;
using ilmoitustaulu_server.Interfaces;
using ilmoitustaulu_server.Models;
using ilmoitustaulu_server.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;

namespace ilmoitustaulu_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IUserRepository _userRepository;
        private readonly IConfiguration _configuration;
        public AuthController(
            IUserRepository userRepository, 
            IConfiguration configuration)
        {
            _userRepository= userRepository;
            _configuration = configuration;
        }
        // https://www.youtube.com/watch?v=Y-MjCw6thao 20min installing nuget packages
        [HttpPost("register")]
        public IActionResult CreateUser(UserCreateDTO userCreate)
        {
            if (userCreate == null || !ModelState.IsValid)
                return BadRequest(ModelState);

            if (_userRepository.UserWithEmailExists(userCreate.Email))
                return StatusCode(400, "Email is already taken.");

            //password and email format validation

            CreateHash(userCreate.Password, out byte[] hash, out byte[] salt);
            //automapper is kinda pointless...remove from everywhere
            var newUser = new User()
            {
                Salt = salt,
                Hash = hash,
                Contact = new UserContact()
                {
                    Email = userCreate.Email,
                    PhoneNumber = ""
                },
                Address = new UserAddress()
                {
                    Province = "",
                    City = "",
                    PostalCode= 0,
                    StreetAddress= ""
                },
                Ads = new List<Ad>(),
                UserFavouriteAds = new List<UserFavouriteAd>(),
                UserHiddenAds = new List<UserHiddenAd>()
            };

            if (!_userRepository.CreateUser(newUser))
            {
                ModelState.AddModelError("", "Something went wrong while saving");
                return StatusCode(500, ModelState);
            }

            return Ok("User registered.");
        }

        [HttpPost("login")]
        //Task<ActionResult<string>>
        public IActionResult LoginUser(UserLoginDTO request)
        {
            if (request == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!_userRepository.UserWithEmailExists(request.Email))
            {
                return BadRequest("Wrong email or password.");
            }

            var user = _userRepository.GetUserByEmail(request.Email);
            if(!VerifyPassword(request.Password, user.Hash, user.Salt))
            {
                return BadRequest("Wrong email or password.");
            }
            string token = CreateToken(request.Email);
            return Ok(token);
        }
        //should definately create method for jwt verification
        private string CreateToken(string email)
        {
            //need validation. throws error ilmoitustaulu_server.Models.User.Contact.get returned null.
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email, email)
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
                _configuration["Token"]));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }

        private void CreateHash(string password, out byte[] hash, out byte[] salt)
        {
            using (var hmac = new HMACSHA512())
            {
                salt = hmac.Key;
                hash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private bool VerifyPassword(string password, byte[] hash, byte[] salt)
        {
            using(var hmac = new HMACSHA512(salt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(hash);
            }
        }
    }
}
