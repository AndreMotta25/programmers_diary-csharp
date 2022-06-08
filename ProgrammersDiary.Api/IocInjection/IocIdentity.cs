using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ProgrammersDiary.Identity.Data;

namespace ProgrammersDiary.Api.IocInjection
{
    public static class IocIdentity
    {
         public static IServiceCollection AddIdentityService(this IServiceCollection services, IConfiguration configuration)
        {

            services.AddDbContext<IdentityDataContext>(options => options.UseSqlServer(
                configuration.GetSection("ConnectionStrings")["Andre"]
            ));
            // Quem permite esse metodo aqui e o UI
            services.AddDefaultIdentity<IdentityUser>()
                .AddRoles<IdentityRole>()
                .AddEntityFrameworkStores<IdentityDataContext>()
                .AddDefaultTokenProviders();
            
            //São regras para a criação da senha(identity)   
            services.Configure<IdentityOptions>(options => 
            {
                options.Password.RequireDigit = true;
                options.Password.RequireLowercase = true;
                options.Password.RequireNonAlphanumeric = true;
                options.Password.RequireUppercase = true;
                options.Password.RequiredLength = 6;
            });     
            return services;
        }   
    }
}
