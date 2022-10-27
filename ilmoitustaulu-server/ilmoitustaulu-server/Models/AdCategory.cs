namespace ilmoitustaulu_server.Models
{
    public class AdCategory
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Ad> Ads { get; set; }
    }
}
