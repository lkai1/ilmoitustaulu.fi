using ilmoitustaulu_server.Models;

namespace ilmoitustaulu_server.DTOs
{
    public class AdGetDTO
    {
        public int Id { get; set; }
        public int Price { get; set; }
        public string Description { get; set; }
        public ICollection<AdImageGetDTO> Images { get; set; }
        public AdTypeGetDTO Type { get; set; }
        public AdCategoryGetDTO Category { get; set; }
        public AdContactGetDTO Contact { get; set; }
        public AdAddressGetDTO Address { get; set; }
    }
    public class AdPostDTO
    {
        public int Price { get; set; }
        public string Description { get; set; }
        public ICollection<AdImagePostDTO> Images { get; set; }
        public AdContactPostDTO Contact { get; set; }
        public AdAddressPostDTO Address { get; set; }
    }
}
