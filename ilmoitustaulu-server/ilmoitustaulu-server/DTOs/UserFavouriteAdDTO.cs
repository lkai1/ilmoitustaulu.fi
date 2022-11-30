namespace ilmoitustaulu_server.DTOs
{
    public class UserFavouriteAdGetDTO
    {
        public ICollection<AdGetDTO> Ads;
    }
    public class UserFavouriteAdPostDTO
    {
        public int UserId;
        public int AdId;
    }
}
