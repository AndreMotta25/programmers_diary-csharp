using System;
using System.ComponentModel.DataAnnotations;

namespace ProgrammersDiary.Application.DTOs.Request
{
    public class UsuarioCadastroRequest
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [MinLength(5,ErrorMessage = "O {0} deve ter no minimo {1}")]
        public string Username { get; set; }

        [Required]
        [MinLength(5,ErrorMessage ="O campo {0} deve ter no minimo {1}")]
        public string Password { get; set; }

        [Required]
        [Compare(nameof(Password),ErrorMessage = "Os campos de senha devem ser iguais")]
        public string SenhaConfirmacao { get; set; }
    }
}