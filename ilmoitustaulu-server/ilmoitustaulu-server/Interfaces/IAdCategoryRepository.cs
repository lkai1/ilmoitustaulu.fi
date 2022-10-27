using ilmoitustaulu_server.Models;

namespace ilmoitustaulu_server.Interfaces
{
    public interface IAdCategoryRepository
    {
        ICollection<AdCategory> GetAdCategories();
        AdCategory GetAdCategory(int id);
        ICollection<Ad> GetAdsByAdCategory(int adCategoryId);
        bool AdCategoryExists(int id);
    }
}
