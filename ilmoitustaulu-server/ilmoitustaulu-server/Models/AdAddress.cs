namespace ilmoitustaulu_server.Models
{
    public class AdAddress
    {
        public int Id { get; set; }
        public string Province { get; set; }
        public string City { get; set; }
        public int PostalCode { get; set; }
        public string StreetAddress { get; set; }
        public ICollection<Ad> Ads { get; set; }
    }
}
