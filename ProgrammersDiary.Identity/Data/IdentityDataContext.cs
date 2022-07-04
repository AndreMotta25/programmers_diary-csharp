using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ProgrammersDiary.Identity.Data
{
    public class IdentityDataContext:IdentityDbContext
    {
        public IdentityDataContext(DbContextOptions<IdentityDataContext> options):base(options)
        {
            
        }
    }
}