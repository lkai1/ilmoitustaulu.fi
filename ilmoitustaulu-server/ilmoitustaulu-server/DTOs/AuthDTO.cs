namespace ilmoitustaulu_server.DTOs
{
    public class UserCreateDTO
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
    public class UserLoginDTO
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
