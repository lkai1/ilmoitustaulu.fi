namespace ilmoitustaulu_server.Models
{
    public class Ad
    {
        public int Id { get; set; }
        public int Price { get; set; }
        public string Description { get; set; }
        public ICollection<AdImage> Images { get; set; }
        public User User { get; set; }
        public AdType Type { get; set; }
        public AdCategory Category { get; set; }
        public AdContact Contact { get; set; }
        public AdAddress Address { get; set; }
        public ICollection<UserFavouriteAd> UserFavouriteAds { get; set; }
        public ICollection<UserHiddenAd> UserHiddenAds { get; set; }
    }
}
