using System;
using System.ComponentModel.DataAnnotations;

namespace ProgrammersDiary.Application.DTOs.Request
{
    public class UsuarioLoginRequest
    {
        // [EmailAddress]
        // public string Email { get; set; }

        // [MinLength(5,ErrorMessage = "O {0} deve ter no minimo {1}")]
        // public string? Username { get; set; }
        [MinLength(5,ErrorMessage = "O {0} deve ter no minimo {1}")]
        [Required]
        public string Identificacao { get; set; }

        [Required]
        [MinLength(5,ErrorMessage ="O campo {0} deve ter no minimo {1}")]
        public string Password { get; set; }
    }
}