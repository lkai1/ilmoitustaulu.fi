using ilmoitustaulu_server.Models;

namespace ilmoitustaulu_server.Interfaces
{
    public interface IUserRepository
    {
        User GetUser(int userId);
        User GetUserByEmail(string email);
        bool CreateUser(User user);
        bool Save();
        bool UserWithEmailExists(string email);
        bool UserExists(int userId);
    }
}
