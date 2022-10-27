namespace ilmoitustaulu_server.Models
{
    public class AdContact
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public ICollection<Ad> Ads { get; set; }
    }
}
