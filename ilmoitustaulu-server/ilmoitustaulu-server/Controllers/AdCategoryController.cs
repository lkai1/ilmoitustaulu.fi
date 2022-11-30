using AutoMapper;
using ilmoitustaulu_server.DTOs;
using ilmoitustaulu_server.Interfaces;
using ilmoitustaulu_server.Models;
using Microsoft.AspNetCore.Mvc;

namespace ilmoitustaulu_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdCategoryController : Controller
    {
        private readonly IAdCategoryRepository _adCategoryRepository;
        private readonly IAdRepository _adRepository;
        private readonly IMapper _mapper;
        public AdCategoryController(
            IAdCategoryRepository adCategoryRepository, 
            IAdRepository adRepository,
            IMapper mapper
            )
        {
            _adCategoryRepository = adCategoryRepository;
            _adRepository = adRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<AdCategoryGetDTO>))]
        public IActionResult GetAdCategories()
        {
            var adCategories = _mapper.Map<List<AdCategoryGetDTO>>(_adCategoryRepository.GetAdCategories());

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(adCategories);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(200, Type = typeof(AdCategoryGetDTO))]
        [ProducesResponseType(400)]
        public IActionResult GetAdCategory(int id)
        {
            var adCategory = _mapper.Map<AdCategoryGetDTO>(_adCategoryRepository.GetAdCategory(id));

            if (adCategory == null)
                return NotFound();

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(adCategory);
        }

        [HttpDelete("{adCategoryId}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public IActionResult DeleteAdCategory(int adCategoryId)
        {
            if (!_adCategoryRepository.AdCategoryExists(adCategoryId))
            {
                return NotFound();
            }

            var adCategoryToDelete = _adCategoryRepository.GetAdCategory(adCategoryId);

            if (_adRepository.GetAdsByAdCategory(adCategoryId).Any())
            {
                return BadRequest("Cannot delete a category that is linked to ads.");
            }

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if(!_adCategoryRepository.DeleteAdCategory(adCategoryToDelete))
            {
                ModelState.AddModelError("", "Something went wrong deleting category");
            }
            return NoContent();
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateAdCategory([FromBody] AdCategoryPostDTO adCategory)
        {
            //expects also id which is not good, figure out how to remove it
            if (adCategory == null)
                return BadRequest(ModelState);
            var category = _adCategoryRepository.GetAdCategories()
                .Where(ac => ac.Name.Trim().ToLower() == adCategory.Name.Trim().ToLower())
                .FirstOrDefault();
            if(category != null)
            {
                ModelState.AddModelError("", "AdCategory already exists");
                return StatusCode(422, ModelState);
            }
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var categoryMap = _mapper.Map<AdCategory>(adCategory);
            if (!_adCategoryRepository.CreateAdCategory(categoryMap))
            {
                ModelState.AddModelError("", "Something went wrong while saving");
                return StatusCode(500, ModelState);
            }
            return Ok("Successfully created.");
        }
    }
}
