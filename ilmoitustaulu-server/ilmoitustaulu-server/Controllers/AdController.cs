using Microsoft.AspNetCore.Mvc;
using ilmoitustaulu_server.Interfaces;
using ilmoitustaulu_server.Models;
using AutoMapper;
using ilmoitustaulu_server.DTOs;

namespace ilmoitustaulu_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdController : Controller
    {
        private readonly IAdRepository _adRepository;
        private readonly IUserRepository _userRepository;
        private readonly IAdTypeRepository _adTypeRepository;
        private readonly IAdCategoryRepository _adCategoryRepository;
        private readonly IMapper _mapper;
        public AdController(
            IAdRepository adRepository, 
            IUserRepository userRepository, 
            IAdTypeRepository adTypeRepository,
            IAdCategoryRepository adCategoryRepository, 
            IMapper mapper)
        {
            _adRepository = adRepository;
            _userRepository = userRepository;
            _adTypeRepository = adTypeRepository;
            _adCategoryRepository = adCategoryRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<AdGetDTO>))]
        public IActionResult GetAds()
        {
            try
            {
                var Ads = _mapper.Map<List<AdGetDTO>>(_adRepository.GetAds());
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                return Ok(Ads);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return BadRequest("BAD BAD BAD!!!");


        }

        [HttpGet("{id}")]
        [ProducesResponseType(200, Type = typeof(AdGetDTO))]
        [ProducesResponseType(400)]
        public IActionResult GetAd(int id)
        {
            var ad = _mapper.Map<AdGetDTO>(_adRepository.GetAd(id));

            if (!_adRepository.AdExists(id))
                return NotFound();

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(ad);
        }

        [HttpGet("by_category/{adCategoryId}")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<AdGetDTO>))]
        [ProducesResponseType(400)]
        public IActionResult GetAdsByAdCategory(int adCategoryId)
        {
            var ads = _mapper.Map<List<AdGetDTO>>(
                _adRepository.GetAdsByAdCategory(adCategoryId));

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(ads);
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateAd([FromQuery] int userId, int typeId, int categoryId, [FromBody] AdPostDTO adCreate)
        {
            if (adCreate == null)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if(!_userRepository.UserExists(userId) || !_adTypeRepository.AdTypeExists(typeId) || !_adCategoryRepository.AdCategoryExists(categoryId))
            {
                return StatusCode(400, "User, type or category does not exists");
            }
            // the problem might be that user entity is required to assign to Ad when creating new ad so the relation works and Id seems not to be enough.


            //validate that user, category and type exists,
            //this is why you should create Exists method for each repository
            //var userExists()

            var adMap = _mapper.Map<Ad>(adCreate);

            var user = _userRepository.GetUser(userId);
            var type = _adTypeRepository.GetAdType(typeId);
            var category = _adCategoryRepository.GetAdCategory(categoryId);
            adMap.User = user;
            adMap.Type = type;
            adMap.Category = category;
            adMap.Images = new List<AdImage>();

            if (!_adRepository.CreateAd(adMap))
            {
                ModelState.AddModelError("", "Something went wrong while saving");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully created.");
        }

        //[HttpGet("{adId}/description")]
        //[ProducesResponseType(200, Type = typeof(string))]
        //[ProducesResponseType(400)]
        //public IActionResult GetAdDescription(int adId)
        //{
        //    var description = _adRepository.GetAdDescription(adId);

        //    if (description == null)
        //        return NotFound();

        //    if (!ModelState.IsValid)
        //        return BadRequest();

        //    return Ok(description);
        //}
    }
}
