namespace ilmoitustaulu_server.DTOs
{
    public class AdTypeGetDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
    public class AdTypePostDTO
    {
        public string Name { get; set; }
    }
}
