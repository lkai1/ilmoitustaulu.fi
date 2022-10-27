namespace ilmoitustaulu_server.Models
{
    public class UserFavouriteAd
    {
        public int UserId { get; set; }
        public int AdId { get; set; }
        public User User { get; set; }
        public Ad Ad { get; set; }
    }
}
