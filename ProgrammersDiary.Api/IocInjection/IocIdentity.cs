using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ProgrammersDiary.Data.Context;
using ProgrammersDiary.Domain.Entities;
// using ProgrammersDiary.Identity.Data;
using ProgrammersDiary.Identity.Interfaces;
using ProgrammersDiary.Identity.Services;

namespace ProgrammersDiary.Api.IocInjection
{
    public static class IocIdentity
    {
         public static IServiceCollection AddIdentityService(this IServiceCollection services, IConfiguration configuration)
        {

            services.AddDbContext<DataContext>(options => options.UseSqlServer(
                configuration.GetSection("ConnectionStrings")["Andre"]
            ));
            services.AddScoped<IIdentityService,IdentityService>();
            
            // Quem permite esse metodo aqui e o UI
            services.AddDefaultIdentity<User>()
                .AddRoles<IdentityRole>()
                .AddEntityFrameworkStores<DataContext>()
                .AddDefaultTokenProviders();
            
            //São regras para a criação da senha(identity)   
            services.Configure<IdentityOptions>(options => 
            {
                options.Password.RequireDigit = false;
                options.Password.RequireLowercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequiredLength = 2;
                options.User.AllowedUserNameCharacters ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._+";
                options.User.RequireUniqueEmail = true;
            });     
            return services;
        }   
    }
}
