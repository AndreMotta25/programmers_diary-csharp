using System;

namespace ProgrammersDiary.Application.DTOs.Request
{
    public class UsuarioUpdateRequest
    {
        public string Password { get; set; }
        public string SamePassword { get; set; }
        public string UserName { get; set; }
    }
}