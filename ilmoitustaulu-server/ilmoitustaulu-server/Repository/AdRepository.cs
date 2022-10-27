using ilmoitustaulu_server.Data;
using ilmoitustaulu_server.Interfaces;
using ilmoitustaulu_server.Models;

namespace ilmoitustaulu_server.Repository
{
    public class AdRepository : IAdRepository
    {
        private readonly DataContext _context;
        public AdRepository(DataContext context)
        {
            _context = context;
        }
        public ICollection<Ad> GetAds()
        {
            return _context.Ads.OrderBy(a => a.Id).ToList();
        }
        public Ad GetAd(int id)
        {
            return _context.Ads.Where(a => a.Id == id).FirstOrDefault();
        }
        public string GetAdDescription(int adId)
        {
            var ad = _context.Ads.Where(a => a.Id == adId).FirstOrDefault();
            if(ad == null)
                return "";

            return ad.Description;
        }
        public bool AdExists(int id)
        {
            var ad = _context.Ads.Where(a => a.Id == id).FirstOrDefault();
            if (ad == null)
                return false;

            return true;
        }
    }
}
