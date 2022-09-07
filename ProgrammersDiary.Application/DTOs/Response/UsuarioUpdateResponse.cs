using System;

namespace ProgrammersDiary.Application.DTOs.Response
{
    public class UsuarioUpdateResponse
    {
        public UsuarioUpdateResponse(bool sucesso)
        {
            Succeeded = sucesso; 
            Erros = new List<string>();
        }

        public void AdicionarErros(List<string> item ) {
            Erros.AddRange(item);
        }

        public bool Succeeded { get; set; }
        public List<string> Erros { get; set; }
    }
}