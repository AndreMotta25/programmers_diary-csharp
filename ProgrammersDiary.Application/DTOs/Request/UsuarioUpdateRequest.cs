using System;
using System.ComponentModel.DataAnnotations;

namespace ProgrammersDiary.Application.DTOs.Request
{
    public class UsuarioUpdateRequest
    {
        [Required(ErrorMessage ="O campo é obrigatorio")]
        public string OldPassword { get; set; }
        
        [Required(ErrorMessage ="O campo é obrigatorio")]
        [MinLength(5, ErrorMessage = "A senha deve ter no minimo 5 caracteres")]
        public string Password { get; set; }

        [Compare(nameof(Password),ErrorMessage = "Os campos de senha devem ser iguais")]
        [Required(ErrorMessage ="O campo é obrigatorio")]
        public string SamePassword { get; set; }
        [Required(ErrorMessage ="O campo é obrigatorio")]
        public string UserName { get; set; }
    }
}