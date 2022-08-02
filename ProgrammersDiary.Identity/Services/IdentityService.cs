using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using ProgrammersDiary.Application.DTOs.Request;
using ProgrammersDiary.Application.DTOs.Response;
using ProgrammersDiary.Domain.Entities;
using ProgrammersDiary.Identity.Configuration;
using ProgrammersDiary.Identity.Interfaces;

namespace ProgrammersDiary.Identity.Services
{
    public class IdentityService : IIdentityService
    {
        // loga o usuario
        private readonly SignInManager<User> _signInManager;

        // cadastra e gerencia o usuario
        private readonly UserManager<User> _manager;
        private readonly ITokenService _token;   
        private readonly RoleManager<IdentityRole> _role;

        public IdentityService(SignInManager<User> signInManager, 
                               UserManager<User> manager,
                               RoleManager<IdentityRole> roleManager,
                               ITokenService token) {
            
            _signInManager = signInManager;
            _manager = manager;
            _role = roleManager;
            _token = token;    

        }
        public async Task<UsuarioResponse> CadastrarUsuario(UsuarioCadastroRequest usuario)
        {
            var newUser = new User {
                UserName = usuario.Username,
                Email = usuario.Email,
                EmailConfirmed = true
            };

            var result = await _manager.CreateAsync(newUser,usuario.Password);
            
            await _manager.AddToRoleAsync(newUser,"usuario");
            
            var usuarioResponse = new UsuarioResponse(result.Succeeded);
            
            // desbloqueia a conta
            if(result.Succeeded) await _manager.SetLockoutEnabledAsync(newUser,false);
            if(!result.Succeeded && result.Errors.Count() > 0 )
                usuarioResponse.AdicionarErros(result.Errors.Select(r => r.Description).ToList());
            
            return usuarioResponse;
        }

        public async Task<UsuarioLoginResponse> LoginUsuario(UsuarioLoginRequest usuario)
        {
            // string? identificacao  = usuario?.Email != "user@example.com" ? usuario?.Email : usuario?.Username;
            IdentityUser? user = await _manager.FindByEmailAsync(usuario.Identificacao) ?? await _manager.FindByNameAsync(usuario.Identificacao);
            
            var login = new UsuarioLoginResponse();
            
            if(user != null){
                var result = await _signInManager.PasswordSignInAsync(user.UserName,usuario.Password,false,false);

                if(result.Succeeded) 
                    return await _token.GetToken(user.Email);
                else {
                    
                    if(result.IsLockedOut)
                        login.Erro = "Esta conta está bloqueada";
                    else if(result.IsNotAllowed)
                        login.Erro = "Esta conta não pode fazer login atualmente";
                    else if(result.RequiresTwoFactor)
                        login.Erro = "Requer a autenticação de 2 fatores";
                    else
                        login.Erro = "Usuario ou Senha estão incorretos";    
                }
            }
            else 
                login.Erro = "Usuario ou Senha estão incorretos";

            return login;   
        }

        public async Task<UsuarioUpdateResponse> AlterarDadosUsuario(string email, UsuarioUpdateRequest usuario) {
            var user = await _manager.FindByEmailAsync(email);
            user.UserName = usuario.UserName;
            user.PasswordHash = new PasswordHasher<User>().HashPassword(user,usuario.Password);
            
            
            var result = await _manager.UpdateAsync(user); 
            var userResponse = new UsuarioUpdateResponse(result.Succeeded);

            if(!result.Succeeded && result.Errors.Count() > 0 )
            {
                userResponse.AdicionarErros(result.Errors.Select(r => r.Description).ToList());
                return userResponse;
            }
            return userResponse;
            
        } 
        
        public async Task<User?> FindUser(string email) {
            var user  = await _manager.FindByEmailAsync(email);
            return user;
        }
    }
}