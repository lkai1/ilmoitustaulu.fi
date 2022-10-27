namespace ilmoitustaulu_server.Models
{
    public class UserAddress
    {
        public int Id { get; set; }
        public string Province { get; set; }
        public string City { get; set; }
        public int PostalCode { get; set; }
        public string StreetAddress { get; set; }
    }
}
