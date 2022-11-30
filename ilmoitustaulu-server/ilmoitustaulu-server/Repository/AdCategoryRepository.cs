using ilmoitustaulu_server.Data;
using ilmoitustaulu_server.Interfaces;
using ilmoitustaulu_server.Models;

namespace ilmoitustaulu_server.Repository
{
    public class AdCategoryRepository : IAdCategoryRepository
    {
        private readonly DataContext _context;
        public AdCategoryRepository(DataContext context)
        {
            _context = context;
        }
        public bool DeleteAdCategory(AdCategory adCategory)
        {
            _context.Remove(adCategory);
            return Save();
        }
        public bool AdCategoryExists(int id)
        {
            return _context.AdCategories.Any(ac => ac.Id == id);
        }

        public bool CreateAdCategory(AdCategory adCategory)
        {
            _context.Add(adCategory);
            return Save();
        }

        public ICollection<AdCategory> GetAdCategories()
        {
            return _context.AdCategories.OrderBy(ac => ac.Name).ToList();
        }

        public AdCategory GetAdCategory(int id)
        {
            return _context.AdCategories.Where(ac => ac.Id == id).FirstOrDefault();
        }

        public bool Save()
        {
            return _context.SaveChanges() > 0;
        }
    }
}
