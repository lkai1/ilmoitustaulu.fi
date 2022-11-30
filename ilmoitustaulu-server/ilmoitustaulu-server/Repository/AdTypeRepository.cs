using ilmoitustaulu_server.Data;
using ilmoitustaulu_server.Interfaces;
using ilmoitustaulu_server.Models;

namespace ilmoitustaulu_server.Repository
{
    public class AdTypeRepository : IAdTypeRepository
    {
        private readonly DataContext _context;
        public AdTypeRepository(DataContext context)
        {
            _context = context;
        }

        public bool AdTypeExists(int adTypeId)
        {
            return _context.AdTypes.Any(at => at.Id == adTypeId);
        }

        public AdType GetAdType(int adTypeId)
        {
            return _context.AdTypes.Where(at => at.Id == adTypeId).FirstOrDefault();
        }

        public ICollection<AdType> GetAdTypes()
        {
            return _context.AdTypes.OrderBy(at => at.Name).ToList();
        }
    }
}
