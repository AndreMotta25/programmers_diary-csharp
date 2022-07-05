using System;

namespace ProgrammersDiary.Application.DTOs.Response
{
    public class UsuarioLoginResponse
    {
        public bool Succeeded { get; set; }
        public string Token { get; set; }
        public string Erro {get;set;}
    }
}