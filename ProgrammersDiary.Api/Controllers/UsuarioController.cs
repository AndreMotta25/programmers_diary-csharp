using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ProgrammersDiary.Application.DTOs.Request;
using ProgrammersDiary.Application.DTOs.Response;
using ProgrammersDiary.Identity.Interfaces;

namespace ProgrammersDiary.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuarioController:Controller
    {
        private readonly IIdentityService _identityService;
        private readonly ITokenService _token;
        public UsuarioController(IIdentityService identityService,ITokenService token) {
            _identityService = identityService;
            _token = token;
        }

        [HttpPost("Cadastrar")]
        public async Task<ActionResult<UsuarioResponse>> CadastrarUsuario(UsuarioCadastroRequest usuario)
        {
            var usuarioResponse = await _identityService.CadastrarUsuario(usuario); 
            if(usuarioResponse.Sucesso) return Ok(usuarioResponse);
            return BadRequest(usuarioResponse);
            
        }
        [HttpPost("Login")]
        public async Task<ActionResult<UsuarioLoginResponse>> LoginUsuario(UsuarioLoginRequest usuario)
        {
            var usuarioResponse = await _identityService.LoginUsuario(usuario);
            if(usuarioResponse.Succeeded)
                return Ok(usuarioResponse);
            else 
                if(usuarioResponse.Erro.Equals("Usuario ou Senha estão incorretos")) 
                    return NotFound("Usuario ou Senha estão incorretos");

            return BadRequest(usuarioResponse);        
        }

        [HttpGet("Validar-Token/{token}")]
        public async Task<ActionResult<UsuarioLoginResponse?>> ValidarToken(string token) { 

            // return _token.ValidarToken(token);
            var tokenResult = _token.ValidarToken(token);
            if(tokenResult != null ) {
                var email = tokenResult.Claims.FirstOrDefault(u => u.Type == "Email")?.Value;
                var user = await _identityService.FindUser(email);
                return Ok(new UsuarioLoginResponse{
                    Succeeded = true,
                    Id = user.Id,
                    Email = user.Email,
                    Erro = "",
                });
            }
            return BadRequest(new UsuarioLoginResponse{Erro = "Esse token não está mais valido", Succeeded = false});
        }
        
        [HttpPut]
        [Authorize(Roles = "usuario")]
        public async Task<ActionResult<IdentityResult>> AtualizarUsuario(UsuarioUpdateRequest usuario) {
           var email_user = User.Claims.ToArray()[1].Value;
           var response =  await _identityService.AlterarDadosUsuario(email_user,usuario);
           if(response.Succeeded) 
            return Ok(response);
           return BadRequest(response)  ;
        }
        
        [HttpGet("PegarUsername")]
        [Authorize(Roles = "usuario")]
        public async Task<ActionResult> GetUserData() {
            var email = User.Claims.ToArray()[1]?.Value;
            var user = await _identityService.FindUser(email);
            return Ok(user.UserName);
        }
    }
}