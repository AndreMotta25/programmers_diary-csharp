using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using ProgrammersDiary.Identity.Configuration;
using ProgrammersDiary.Identity.Interfaces;
using ProgrammersDiary.Identity.Services;

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
                jwt.Audience = jwtOption["Audience"];
                jwt.Expire = int.Parse(jwtOption["Expiration"]);
                jwt.SigningCredentials = new SigningCredentials(key,SecurityAlgorithms.HmacSha512);
            });
            services.AddScoped<ITokenService,TokenService>();
            
            // Validação do token
            var tokenValidationParameters = new TokenValidationParameters
            {
                // estamos validando o emissor, se o emissor for diferente do qual está setado no appSettings o token não vai passar
                ValidateIssuer = true,
                ValidIssuer = jwtOption["Issuer"],

                // vamos validar a audiencia tambem'
                ValidateAudience = true,
                ValidAudience = jwtOption["Audience"],

                // vamos validar a assinatura
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = key,

                // vamos validar o tempo de vida do token
                RequireExpirationTime = true,
                ValidateLifetime = true,
                ClockSkew = TimeSpan.Zero,
            }; 

            services.AddAuthentication(options => 
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                // adicionamos o suporte ao jwt
            }).AddJwtBearer(options => 
            {
                // Estamos passando os requisitos para a validação dos paremetros
                options.TokenValidationParameters = tokenValidationParameters;
            });

            return services;
        }
        
    }
}

/*
{
  "email": "relaie@gmail.com",
  "username": "string",
  "password": "desenhos1"
}

*/ 