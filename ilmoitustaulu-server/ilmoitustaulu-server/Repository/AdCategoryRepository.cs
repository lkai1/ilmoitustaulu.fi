using ilmoitustaulu_server.Data;
using ilmoitustaulu_server.Interfaces;
using ilmoitustaulu_server.Models;

namespace ilmoitustaulu_server.Repository
{
    public class AdCategoryRepository : IAdCategoryRepository
    {
        private DataContext _context;
        public AdCategoryRepository(DataContext context)
        {
            _context = context;
        }
        public bool AdCategoryExists(int id)
        {
            return _context.AdCategories.Any(ac => ac.Id == id);
        }

        public ICollection<AdCategory> GetAdCategories()
        {
            return _context.AdCategories.OrderBy(ac => ac.Name).ToList();
        }

        public AdCategory GetAdCategory(int id)
        {
            return _context.AdCategories.Where(ac => ac.Id == id).FirstOrDefault();
        }

        public ICollection<Ad> GetAdsByAdCategory(int adCategoryId)
        {   //for many-to-many relationship
            //return _context.AdCategories.Where(ac => ac.Id == adCategoryId).Select(a => a.Ads).ToList();
            return _context.Ads.Where(a => a.Category.Id == adCategoryId).ToList();
        }
    }
}
