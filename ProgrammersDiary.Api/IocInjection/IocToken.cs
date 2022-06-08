using System.Text;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using ProgrammersDiary.Identity.Configuration;

namespace ProgrammersDiary.Api.IocInjection
{
    public static class IocToken
    {   
        public static IServiceCollection AddTokenService(this IServiceCollection services, IConfiguration configuration)
        {


            // configurando a classe de token
            var jwtOption = configuration.GetSection("JwtOptions");
            var key = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(jwtOption["SecurityKey"]));
            services.Configure<JwtOptions>( jwt => 
            {
                jwt.Issuer = jwtOption["Issuer"];
                jwt.Audience = jwtOption["JwtOptions:Audience"];
                jwt.Expire = Convert.ToInt32(jwtOption["Expiration"]);
                jwt.SigningCredentials = new SigningCredentials(key,SecurityAlgorithms.HmacSha512);
            });

            return services;
        }
        
    }
}