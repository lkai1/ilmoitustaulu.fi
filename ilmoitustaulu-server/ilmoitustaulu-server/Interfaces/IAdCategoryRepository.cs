using ilmoitustaulu_server.Models;

namespace ilmoitustaulu_server.Interfaces
{
    public interface IAdCategoryRepository
    {
        ICollection<AdCategory> GetAdCategories();
        AdCategory GetAdCategory(int adCategoryId);
        bool AdCategoryExists(int adCategoryId);
        bool CreateAdCategory(AdCategory adCategory);
        bool DeleteAdCategory(AdCategory adCategory);
        bool Save();
    }
}
