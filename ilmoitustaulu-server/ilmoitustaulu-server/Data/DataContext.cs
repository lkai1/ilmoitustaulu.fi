using ilmoitustaulu_server.Models;
using Microsoft.EntityFrameworkCore;

namespace ilmoitustaulu_server.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Ad> Ads { get; set; }
        public DbSet<AdAddress> AdAddresses { get; set; }
        public DbSet<AdCategory> AdCategories { get; set; }
        public DbSet<AdContact> AdContacts { get; set; }
        public DbSet<AdImage> AdImages { get; set; }
        public DbSet<AdType> AdTypes { get; set; }
        public DbSet<UserFavouriteAd> FavouriteAds { get; set; }
        public DbSet<UserHiddenAd> HiddenAds { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserAddress> UserAddresses { get; set; }
        public DbSet<UserContact> UserContacts { get; set; }

        //creates the table relation for many-to-many. see later if modelBuilder is needed for something else
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserFavouriteAd>()
                .HasKey(ufa => new { ufa.AdId, ufa.UserId });
            modelBuilder.Entity<UserFavouriteAd>()
                .HasOne(ufa => ufa.Ad)
                .WithMany(a => a.UserFavouriteAds)
                .HasForeignKey(afa => afa.AdId);
            modelBuilder.Entity<UserFavouriteAd>()
                .HasOne(ufa => ufa.User)
                .WithMany(u => u.UserFavouriteAds)
                .HasForeignKey(ufa => ufa.UserId);

            modelBuilder.Entity<UserHiddenAd>()
                .HasKey(uha => new { uha.AdId, uha.UserId });
            modelBuilder.Entity<UserHiddenAd>()
                .HasOne(uha => uha.Ad)
                .WithMany(a => a.UserHiddenAds)
                .HasForeignKey(uha => uha.AdId);
            modelBuilder.Entity<UserHiddenAd>()
                .HasOne(uha => uha.User)
                .WithMany(u => u.UserHiddenAds)
                .HasForeignKey(uha => uha.UserId);
        }
    }
}
