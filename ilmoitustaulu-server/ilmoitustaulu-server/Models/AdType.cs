namespace ilmoitustaulu_server.Models
{
    public class AdType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Ad> Ads { get; set; }
    }
}
