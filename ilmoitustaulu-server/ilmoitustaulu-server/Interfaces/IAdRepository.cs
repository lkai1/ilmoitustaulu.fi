using ilmoitustaulu_server.Models;

namespace ilmoitustaulu_server.Interfaces
{
    public interface IAdRepository
    {
        ICollection<Ad> GetAds();
        Ad GetAd(int adId);
        ICollection<Ad> GetAdsByAdCategory(int adCategoryId);
        bool CreateAd(Ad ad);
        bool Save();
        bool AdExists(int adId);
    }
}
