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
        public UsuarioController(IIdentityService identityService) => _identityService = identityService;

        [HttpPost]
        public async Task<ActionResult<UsuarioResponse>> CadastrarUsuario(UsuarioCadastroRequest usuario)
        {
            var usuarioResponse = await _identityService.CadastrarUsuario(usuario); 
            if(usuarioResponse.Sucesso) return Ok(usuarioResponse);
            return BadRequest(usuarioResponse);
            
        }
    }
}