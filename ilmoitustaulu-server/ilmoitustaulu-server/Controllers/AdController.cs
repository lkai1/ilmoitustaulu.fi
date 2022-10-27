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
        private readonly IMapper _mapper;
        public AdController(IAdRepository adRepository, IMapper mapper)
        {
            _adRepository = adRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Ad>))]
        public IActionResult GetAds()
        {
            var Ads = _mapper.Map<List<AdDTO>>(_adRepository.GetAds());

            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(Ads);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(200, Type = typeof(Ad))]
        [ProducesResponseType(400)]
        public IActionResult GetAd(int id)
        {
            var ad = _mapper.Map<AdDTO>(_adRepository.GetAd(id));

            if (ad == null)
                return NotFound();

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(ad);
        }

        [HttpGet("{adId}/description")]
        [ProducesResponseType(200, Type = typeof(string))]
        [ProducesResponseType(400)]
        public IActionResult GetAdDescription(int adId)
        {
            var description = _adRepository.GetAdDescription(adId);

            if (description == null)
                return NotFound();

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(description);
        }
    }
}
