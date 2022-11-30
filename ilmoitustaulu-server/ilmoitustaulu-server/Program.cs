using Microsoft.EntityFrameworkCore;
using ilmoitustaulu_server.Data;
using ilmoitustaulu_server.Interfaces;
using ilmoitustaulu_server.Repository;
using ilmoitustaulu_server.Seed;
using System.Data.SqlClient;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddTransient<Seed>();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddScoped<IAdRepository, AdRepository>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IAdTypeRepository, AdTypeRepository>();
builder.Services.AddScoped<IAdCategoryRepository, AdCategoryRepository>();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var dbConnectionString =
    $"{builder.Configuration.GetConnectionString("DefaultConnection")}" +
    $" Database={builder.Configuration["DbName"]};" +
    $" Username={builder.Configuration["DbUsername"]};" +
    $" Password={builder.Configuration["DbPassword"]};";

builder.Services.AddDbContext<DataContext>(options => {
    options.UseNpgsql(dbConnectionString);
});

builder.Services.AddCors(p => p.AddPolicy("cors", builder =>
{
    builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));
var app = builder.Build();

if (args.Length == 1 && args[0].ToLower() == "seeddata")
    SeedData(app);

void SeedData(IHost app)
{
    var scopedFactory = app.Services.GetService<IServiceScopeFactory>();

    using (var scope = scopedFactory.CreateScope())
    {
        var service = scope.ServiceProvider.GetService<Seed>();
        service.SeedDataContext();
    }
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("cors");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
