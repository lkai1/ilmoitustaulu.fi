namespace ilmoitustaulu_server.DTOs
{
    public class AdImageGetDTO
    {
        public int Id { get; set; }
        public string Image { get; set; }
    }
    public class AdImagePostDTO
    {
        public string Image { get; set; }
    }
}
