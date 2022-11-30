using AutoMapper;
using ilmoitustaulu_server.DTOs;
using ilmoitustaulu_server.Models;

namespace ilmoitustaulu_server.Helper
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Ad, AdGetDTO>();
            CreateMap<AdPostDTO, Ad>();
            CreateMap<AdType, AdTypeGetDTO>();
            CreateMap<AdTypePostDTO, Ad>();
            CreateMap<AdCategory, AdCategoryGetDTO>();
            CreateMap<AdCategoryPostDTO, AdCategory>();
            CreateMap<AdContact, AdContactGetDTO>();
            CreateMap<AdContactPostDTO, AdContact>();
            CreateMap<AdAddress, AdAddressGetDTO>();
            CreateMap<AdAddressPostDTO, AdAddress>();
            CreateMap<AdImage, AdImageGetDTO>();
            CreateMap<AdImagePostDTO, AdImage>();
        }
    }
}
