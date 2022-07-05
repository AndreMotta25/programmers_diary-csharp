using System;
using System.Security.Claims;
using ProgrammersDiary.Application.DTOs.Response;

namespace ProgrammersDiary.Identity.Interfaces
{
    public interface ITokenService
    {
        public bool ValidarToken(string token);
        public Task<UsuarioLoginResponse> GetToken(string email);
        public string GerarToken(IList<Claim> tokenClaims);
    }
}