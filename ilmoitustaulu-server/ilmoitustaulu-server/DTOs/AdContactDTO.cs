namespace ilmoitustaulu_server.DTOs
{
    public class AdContactGetDTO
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
    }
    public class AdContactPostDTO
    {
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
    }
}
