using AutoMapper;
using ilmoitustaulu_server.DTOs;
using ilmoitustaulu_server.Models;

namespace ilmoitustaulu_server.Helper
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Ad, AdDTO>();
            CreateMap<AdCategory, AdCategoryDTO>();
        }
    }
}
