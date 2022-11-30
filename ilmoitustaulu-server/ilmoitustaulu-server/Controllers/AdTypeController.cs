using AutoMapper;
using ilmoitustaulu_server.DTOs;
using ilmoitustaulu_server.Interfaces;
using ilmoitustaulu_server.Models;
using Microsoft.AspNetCore.Mvc;

namespace ilmoitustaulu_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdTypeController : Controller
    {
        private readonly IAdTypeRepository _adTypeRepository;
        public readonly IMapper _mapper;
        public AdTypeController(IAdTypeRepository adTypeRepository, IMapper mapper)
        {
            _adTypeRepository = adTypeRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<AdTypeGetDTO>))]
        public IActionResult GetAdTypes()
        {
            var adTypes = _mapper.Map<List<AdTypeGetDTO>>(_adTypeRepository.GetAdTypes());

            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(adTypes);
        }
    }
}
