namespace ilmoitustaulu_server.DTOs
{
    public class AdCategoryGetDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
    public class AdCategoryPostDTO
    {
        public string Name { get; set; }
    }
}
