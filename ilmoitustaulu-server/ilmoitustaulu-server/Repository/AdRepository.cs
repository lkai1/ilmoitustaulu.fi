using ilmoitustaulu_server.Data;
using ilmoitustaulu_server.DTOs;
using ilmoitustaulu_server.Interfaces;
using ilmoitustaulu_server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
            var ads = _context.Ads
                .Include(a => a.Category)
                .Include(a => a.Type)
                .Include(a => a.Contact)
                .Include(a => a.Address)
                .Include(a => a.Images)
                .ToList();
            //ads.ForEach(a => Console.WriteLine(a.Category.Name));
            //Console.WriteLine("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            //Console.WriteLine(ads);
            return ads;
            //return _context.Ads.OrderBy(a => a.Id).ToList();
        }
        public Ad GetAd(int id)
        {
            return _context.Ads.Where(a => a.Id == id).FirstOrDefault();
        }
        public ICollection<Ad> GetAdsByAdCategory(int adCategoryId)
        {   //for many-to-many relationship
            //return _context.AdCategories.Where(ac => ac.Id == adCategoryId).Select(a => a.Ads).ToList();
            return _context.Ads.Where(a => a.Category.Id == adCategoryId).ToList();
        }
        public bool CreateAd(Ad ad)
        {
            ////this is an example for many to many
            //var userEntity = _context.Users.Where(u => u.Id == userId).FirstOrDefault();
            //var adCategoryEntity = _context.AdCategories.Where(ac => ac.Id == adCategoryId).FirstOrDefault();
            //var adTypeEntity = _context.AdTypes.Where(at => at.Id == adTypeId).FirstOrDefault();
            ////this is supposed to be a join table
            //var user = new User()
            //{
            //    User = userEntity,
            //    Ad = ad
            //};
            //_context.Add(user);
                _context.Add(ad);
                return Save();

        }
        public bool Save()
        {
            return _context.SaveChanges() > 0;
        }
        //public string GetAdDescription(int adId)
        //{
        //    var ad = _context.Ads.Where(a => a.Id == adId).FirstOrDefault();
        //    if(ad == null)
        //        return "";

        //    return ad.Description;
        //}
        public bool AdExists(int id)
        {
            return _context.Ads.Any(a => a.Id == id);
        }
    }
}
