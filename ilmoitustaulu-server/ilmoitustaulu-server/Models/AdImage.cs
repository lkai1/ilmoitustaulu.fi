namespace ilmoitustaulu_server.Models
{
    public class AdImage
    {
        public int Id { get; set; }
        public string Path { get; set; }
        public Ad Ad { get; set; }
    }
}
