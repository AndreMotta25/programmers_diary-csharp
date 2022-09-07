
using Microsoft.AspNetCore.Identity;
using ProgrammersDiary.Application.DTOs.Request;
using ProgrammersDiary.Application.DTOs.Response;
using ProgrammersDiary.Domain.Entities;

namespace ProgrammersDiary.Identity.Interfaces
{
    public interface IIdentityService
    {
         Task<UsuarioResponse> CadastrarUsuario(UsuarioCadastroRequest usuario);
         Task<UsuarioLoginResponse> LoginUsuario(UsuarioLoginRequest usuario);
         public Task<User?> FindUser(string email);
         Task<UsuarioUpdateResponse2> AlterarDadosUsuario(string email, UsuarioUpdateRequest usuario);

    }
}