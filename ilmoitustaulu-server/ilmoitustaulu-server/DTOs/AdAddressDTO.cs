namespace ilmoitustaulu_server.DTOs
{
    public class AdAddressGetDTO
    {
        public int Id { get; set; }
        public string Province { get; set; }
        public string City { get; set; }
        public int PostalCode { get; set; }
        public string StreetAddress { get; set; }
    }
    public class AdAddressPostDTO
    {
        public string Province { get; set; }
        public string City { get; set; }
        public int PostalCode { get; set; }
        public string StreetAddress { get; set; }
    }
}
