namespace ilmoitustaulu_server.Models
{
    public class User
    {
        public int Id { get; set; }
        public byte[] Salt { get; set; }
        public byte[] Hash { get; set; }
        public UserContact Contact { get; set; }
        public UserAddress Address { get; set; }
        public ICollection<Ad> Ads { get; set; }
        public ICollection<UserFavouriteAd> UserFavouriteAds { get; set; }
        public ICollection<UserHiddenAd> UserHiddenAds { get; set; }
        
    }
}
