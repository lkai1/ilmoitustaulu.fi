using ilmoitustaulu_server.Data;
using ilmoitustaulu_server.Models;
using System.Security.Cryptography;

namespace ilmoitustaulu_server.Seed
{
    public class Seed
    {
        private readonly DataContext dataContext;
        public Seed(DataContext context)
        {
            dataContext = context;
        }

        //move into utils/helpers folder
        private void CreateHash(string password, out byte[] hash, out byte[] salt)
        {
            using (var hmac = new HMACSHA512())
            {
                salt = hmac.Key;
                hash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
        public void SeedDataContext()
        {
            if (!dataContext.Users.Any())
            {
                CreateHash("password", out byte[] hash, out byte[] salt);
                var users = new List<User>()
                {
                    new User()
                    {
                        //fix
                        Salt = salt,
                        Hash = hash,
                        Contact = new UserContact()
                        {
                            Email = "kai-le@outlook.com",
                            PhoneNumber = "0403723822"
                        },
                        Address = new UserAddress()
                        {
                            Province = "Pirkanmaa",
                            City = "Nokia",
                            PostalCode = 37120,
                            StreetAddress = "Orelinkatu 5"
                        },
                        Ads = new List<Ad>
                        {
                            new Ad()
                            {
                                Type = new AdType()
                                {
                                    Name = "Ostetaan"
                                },
                                Category = new AdCategory()
                                {
                                    Name = "Autot"
                                },
                                Contact = new AdContact()
                                {
                                    Email = "kai-le@outlook.com",
                                    PhoneNumber = "0403723822"
                                },
                                Address = new AdAddress()
                                {
                                    Province = "Pirkanmaa",
                                    City = "Nokia",
                                    PostalCode = 37120,
                                    StreetAddress = "Orelinkatu 5"
                                },
                                Price = 360,
                                Description = "Ostetaan auto, max. hinta näkyy ilmoituksessa tarjoa vain toimivaa."
                            }
                        }
                    }
                };
                try
                {
                    dataContext.Users.AddRange(users);
                    dataContext.SaveChanges();
                } catch(Exception e)
                {
                    Console.WriteLine(e.Message);
                }
            }
        }
    }
}
//            if (!dataContext.PokemonOwners.Any())
//            {
//                var pokemonOwners = new List<PokemonOwner>()
//                {
//                    new PokemonOwner()
//                    {
//                        Pokemon = new Pokemon()
//                        {
//                            Name = "Pikachu",
//                            BirthDate = new DateTime(1903,1,1),
//                            PokemonCategories = new List<PokemonCategory>()
//                            {
//                                new PokemonCategory { Category = new Category() { Name = "Electric"}}
//                            },
//                            Reviews = new List<Review>()
//                            {
//                                new Review { Title="Pikachu",Text = "Pickahu is the best pokemon, because it is electric", Rating = 5,
//                                Reviewer = new Reviewer(){ FirstName = "Teddy", LastName = "Smith" } },
//                                new Review { Title="Pikachu", Text = "Pickachu is the best a killing rocks", Rating = 5,
//                                Reviewer = new Reviewer(){ FirstName = "Taylor", LastName = "Jones" } },
//                                new Review { Title="Pikachu",Text = "Pickchu, pickachu, pikachu", Rating = 1,
//                                Reviewer = new Reviewer(){ FirstName = "Jessica", LastName = "McGregor" } },
//                            }
//                        },
//                        Owner = new Owner()
//                        {
//                            FirstName = "Jack",
//                            LastName = "London",
//                            Gym = "Brocks Gym",
//                            Country = new Country()
//                            {
//                                Name = "Kanto"
//                            }
//                        }
//                    },
//                    new PokemonOwner()
//                    {
//                        Pokemon = new Pokemon()
//                        {
//                            Name = "Squirtle",
//                            BirthDate = new DateTime(1903,1,1),
//                            PokemonCategories = new List<PokemonCategory>()
//                            {
//                                new PokemonCategory { Category = new Category() { Name = "Water"}}
//                            },
//                            Reviews = new List<Review>()
//                            {
//                                new Review { Title= "Squirtle", Text = "squirtle is the best pokemon, because it is electric", Rating = 5,
//                                Reviewer = new Reviewer(){ FirstName = "Teddy", LastName = "Smith" } },
//                                new Review { Title= "Squirtle",Text = "Squirtle is the best a killing rocks", Rating = 5,
//                                Reviewer = new Reviewer(){ FirstName = "Taylor", LastName = "Jones" } },
//                                new Review { Title= "Squirtle", Text = "squirtle, squirtle, squirtle", Rating = 1,
//                                Reviewer = new Reviewer(){ FirstName = "Jessica", LastName = "McGregor" } },
//                            }
//                        },
//                        Owner = new Owner()
//                        {
//                            FirstName = "Harry",
//                            LastName = "Potter",
//                            Gym = "Mistys Gym",
//                            Country = new Country()
//                            {
//                                Name = "Saffron City"
//                            }
//                        }
//                    },
//                                    new PokemonOwner()
//                    {
//                        Pokemon = new Pokemon()
//                        {
//                            Name = "Venasuar",
//                            BirthDate = new DateTime(1903,1,1),
//                            PokemonCategories = new List<PokemonCategory>()
//                            {
//                                new PokemonCategory { Category = new Category() { Name = "Leaf"}}
//                            },
//                            Reviews = new List<Review>()
//                            {
//                                new Review { Title="Veasaur",Text = "Venasuar is the best pokemon, because it is electric", Rating = 5,
//                                Reviewer = new Reviewer(){ FirstName = "Teddy", LastName = "Smith" } },
//                                new Review { Title="Veasaur",Text = "Venasuar is the best a killing rocks", Rating = 5,
//                                Reviewer = new Reviewer(){ FirstName = "Taylor", LastName = "Jones" } },
//                                new Review { Title="Veasaur",Text = "Venasuar, Venasuar, Venasuar", Rating = 1,
//                                Reviewer = new Reviewer(){ FirstName = "Jessica", LastName = "McGregor" } },
//                            }
//                        },
//                        Owner = new Owner()
//                        {
//                            FirstName = "Ash",
//                            LastName = "Ketchum",
//                            Gym = "Ashs Gym",
//                            Country = new Country()
//                            {
//                                Name = "Millet Town"
//                            }
//                        }
//                    }
//                };
//                dataContext.PokemonOwners.AddRange(pokemonOwners);
//                dataContext.SaveChanges();
//            }
//        }
//    }
//}
