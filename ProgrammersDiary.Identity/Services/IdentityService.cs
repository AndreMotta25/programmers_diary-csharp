using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using ProgrammersDiary.Application.DTOs.Request;
using ProgrammersDiary.Application.DTOs.Response;
using ProgrammersDiary.Identity.Configuration;
using ProgrammersDiary.Identity.Interfaces;

namespace ProgrammersDiary.Identity.Services
{
    public class IdentityService : IIdentityService
    {
        // loga o usuario
        private readonly SignInManager<IdentityUser> _signInManager;

        // cadastra e gerencia o usuario
        private readonly UserManager<IdentityUser> _manager;
        private readonly JwtOptions _jwt;   
        private readonly RoleManager<IdentityRole> _role;

        public IdentityService(SignInManager<IdentityUser> signInManager, 
                               UserManager<IdentityUser> manager,
                               IOptions<JwtOptions> jwtOptions,
                               RoleManager<IdentityRole> roleManager) {
            
            _signInManager = signInManager;
            _manager = manager;
            _jwt = jwtOptions.Value;                    
            _role = roleManager;    

        }
        public async Task<UsuarioResponse> CadastrarUsuario(UsuarioCadastroRequest usuario)
        {
            var newUser = new IdentityUser {
                UserName = usuario.Username,
                Email = usuario.Email,
                EmailConfirmed = true
            };
            // Cria um papel de usuario no banco
            await _role.CreateAsync(new IdentityRole {Name= "usuario"});

            var result = await _manager.CreateAsync(newUser,usuario.Password);
            
            await _manager.AddToRoleAsync(newUser,"usuario");
            
            var usuarioResponse = new UsuarioResponse(result.Succeeded);
            // desbloqueia a conta
            if(result.Succeeded) await _manager.SetLockoutEnabledAsync(newUser,false);
            if(!result.Succeeded && result.Errors.Count() > 0 )
                usuarioResponse.AdicionarErros(result.Errors.Select(r => r.Description).ToList());
            
            return usuarioResponse;
        }

        public Task<UsuarioLoginResponse> LoginUsuario(UsuarioLoginRequest usuario)
        {
            throw new NotImplementedException();
        }

        public bool ValidarToken(string token)
        {
            throw new NotImplementedException();
        }
    }
}