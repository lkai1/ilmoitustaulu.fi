using ilmoitustaulu_server.Models;

namespace ilmoitustaulu_server.Interfaces
{
    public interface IAdRepository
    {
        ICollection<Ad> GetAds();
        Ad GetAd(int id);
        string GetAdDescription(int adId);
    }
}
