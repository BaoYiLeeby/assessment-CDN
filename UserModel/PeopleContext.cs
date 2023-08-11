using Microsoft.EntityFrameworkCore;

namespace CDN_WebApplication1.UserModel
{
    public class PeopleContext : DbContext
    {
        public PeopleContext(DbContextOptions<PeopleContext> options)
            : base(options)
        {
        }
        public DbSet<User> Users { get; set; } = null!;
    }
}
