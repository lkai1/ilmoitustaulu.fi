using ilmoitustaulu_server.Data;
using ilmoitustaulu_server.Interfaces;
using ilmoitustaulu_server.Models;

namespace ilmoitustaulu_server.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;
        public UserRepository(DataContext context)
        {
            _context = context;
        }

        public bool CreateUser(User user)
        {
            _context.Add(user);
            return Save();
        }

        public User GetUser(int userId)
        {
            return _context.Users.Where(u => u.Id == userId).FirstOrDefault();
        }

        public bool Save()
        {
            return _context.SaveChanges() > 0;
        }

        public bool UserWithEmailExists(string email)
        {
            return _context.Users.Any(u => u.Contact.Email == email);
        }
        public bool UserExists(int userId)
        {
            return _context.Users.Any(u => u.Id == userId);
        }

        public User GetUserByEmail(string email)
        {
            return _context.Users.Where(u => u.Contact.Email == email).FirstOrDefault();
        }
    }
}
