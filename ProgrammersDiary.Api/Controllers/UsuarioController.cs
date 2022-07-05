using System;
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
                    return NotFound();

            return BadRequest(usuarioResponse);        
        }

        [HttpGet("Validar-Token/{token}")]
        public bool ValidarToken(string token) {    
            return _token.ValidarToken(token);
        }
    }
}