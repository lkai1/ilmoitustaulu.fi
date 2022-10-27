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
        private readonly IMapper _mapper;
        public AdCategoryController(IAdCategoryRepository adCategoryRepository, IMapper mapper)
        {
            _adCategoryRepository = adCategoryRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<AdCategory>))]
        public IActionResult GetAdCategories()
        {
            var adCategories = _mapper.Map<List<AdCategoryDTO>>(_adCategoryRepository.GetAdCategories());

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(adCategories);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(200, Type = typeof(AdCategory))]
        [ProducesResponseType(400)]
        public IActionResult GetAdCategory(int id)
        {
            var adCategory = _mapper.Map<AdCategoryDTO>(_adCategoryRepository.GetAdCategory(id));

            if (adCategory == null)
                return NotFound();

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(adCategory);
        }

        [HttpGet("{adCategoryId}/ad")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Ad>))]
        [ProducesResponseType(400)]
        public IActionResult GetAdsByAdCategory(int adCategoryId)
        {
            var ads = _mapper.Map<List<AdDTO>>(
                _adCategoryRepository.GetAdsByAdCategory(adCategoryId));

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(ads);
        }
    }
}
