using System;

namespace ProgrammersDiary.Application.DTOs.Request
{
    public class UsuarioUpdateRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string SamePassword { get; set; }
    }
}