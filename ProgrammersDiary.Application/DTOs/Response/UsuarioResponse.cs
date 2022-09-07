using System;

namespace ProgrammersDiary.Application.DTOs.Response
{
    public class UsuarioResponse
    {
        public bool	 Sucesso { get; set; }    
        public List<string> Erros { get; set; }
        
        public UsuarioResponse(bool sucesso)
        {
            Sucesso = sucesso; 
            Erros = new List<string>();
        }

        public void AdicionarErros(List<string> item ) {
            Erros.AddRange(item);
        }
    }
}