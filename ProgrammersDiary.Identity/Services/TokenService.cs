using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using ProgrammersDiary.Application.DTOs.Response;
using ProgrammersDiary.Domain.Entities;
using ProgrammersDiary.Identity.Configuration;
using ProgrammersDiary.Identity.Interfaces;

namespace ProgrammersDiary.Identity.Services
{
    public class TokenService : ITokenService
    {
        private readonly UserManager<User> _manager;
        private readonly JwtOptions _jwt;

        public TokenService(UserManager<User> manager,
                            IOptions<JwtOptions> jwtOptions)
        {
            _manager = manager;
            _jwt = jwtOptions.Value;  
        }

        public string GerarToken(IList<Claim> tokenClaims)
        {
            var dataExpiracao = DateTime.Now.AddMinutes(_jwt.Expire);

            var jwt = new JwtSecurityToken(
                issuer: _jwt.Issuer,     // issuer: quem é o emissor
                audience: _jwt.Audience, // audience: pra quem está sendo emitido
                claims: tokenClaims,
                notBefore: DateTime.Now,        // só pode ser usado depois de tal data 
                expires: dataExpiracao,         // data de expiração    
                signingCredentials: _jwt.SigningCredentials // SecretKey 
                
            );
            var token = new JwtSecurityTokenHandler().WriteToken(jwt);
            
            return token;

        }

        public async Task<UsuarioLoginResponse> GetToken(string email)
        {
            var tokenClaims = await GetClaims(email); 
            var token = GerarToken(tokenClaims);
            return  new UsuarioLoginResponse() 
                {
                    Succeeded = true,
                    Token = token,
                    Email= email ,
                    Id = (await _manager.FindByEmailAsync(email)).Id,
                    Erro = ""
                };
        }

        public ClaimsPrincipal? ValidarToken(string token)
        {
            try{
                var jwt = new JwtSecurityToken(token);
                var tokenHandler = new JwtSecurityTokenHandler();
                var tvp = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = _jwt.Issuer,
                    ValidAudience = _jwt.Audience,
                    IssuerSigningKey = _jwt.SigningCredentials.Key,
                    RequireExpirationTime = true,
                    ClockSkew = TimeSpan.Zero,
                };
            
                var claims = tokenHandler.ValidateToken(token,tvp,out SecurityToken securityToken);
                return claims;
                // return true;
            }   
            // Se o erro ocorrer é pq o token é invalido
            catch(Exception) {
              return null;  
            }
        }

        public async Task<IList<Claim>> GetClaims(string email) 
        {
           var user = await _manager.FindByEmailAsync(email);
           var roles =  await _manager.GetRolesAsync(user);
           var claims = new List<Claim>();
           
           claims.Add(new Claim(JwtRegisteredClaimNames.Sub, Convert.ToString(user.Id)));
           claims.Add(new Claim("Email", user.Email));
           claims.Add(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())); // é o id do token
           claims.Add(new Claim(JwtRegisteredClaimNames.Nbf, DateTime.Now.ToString()));            
           claims.Add(new Claim(JwtRegisteredClaimNames.Iat, DateTime.Now.ToString())); 
           
           foreach(var role in roles)
                claims.Add(new Claim("role",role));

            return claims;
        }
    }
}