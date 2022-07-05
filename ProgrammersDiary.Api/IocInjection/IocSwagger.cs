using System;
using Microsoft.OpenApi.Models;

namespace ProgrammersDiary.Api.IocInjection
{
    public static class IocSwagger
    {
        public static IServiceCollection AddSwaggerService(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddSwaggerGen(options => 
            {
                options.AddSecurityDefinition("Bearer",new OpenApiSecurityScheme
                {
                    Description = @"JWT Authorization header using the bearer scheme.
                                    Enter 'bearer' [space] and your token in the text input below.
                                    Exemple: 'Bearer 123432sadasdas'",
                    Name = "Authorization",
                    In = ParameterLocation.Header, //onde o paramtro vai ser colocado ? no header
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer"                
                });
                options.AddSecurityRequirement(new OpenApiSecurityRequirement() 
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            },
                            Scheme = "oauth2",
                            Name = "Bearer",
                            In = ParameterLocation.Header,
                        },
                        new List<string>()
                    }
                });
            });
            return services;
        }
    }
}