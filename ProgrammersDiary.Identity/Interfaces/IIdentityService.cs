
using ProgrammersDiary.Application.DTOs.Request;
using ProgrammersDiary.Application.DTOs.Response;

namespace ProgrammersDiary.Identity.Interfaces
{
    public interface IIdentityService
    {
         Task<UsuarioResponse> CadastrarUsuario(UsuarioCadastroRequest usuario);
         Task<UsuarioLoginResponse> LoginUsuario(UsuarioLoginRequest usuario);

         // Temos que ter um endpoint que utilize esse metodo e que pegue o valor do header da requisição 
         bool ValidarToken(string token);
    }
}