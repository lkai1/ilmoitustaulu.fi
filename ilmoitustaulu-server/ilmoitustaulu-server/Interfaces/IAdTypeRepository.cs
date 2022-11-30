using ilmoitustaulu_server.Models;

namespace ilmoitustaulu_server.Interfaces
{
    public interface IAdTypeRepository
    {
        ICollection<AdType> GetAdTypes();
        AdType GetAdType(int adTypeId);
        bool AdTypeExists(int adTypeId);
    }
}
