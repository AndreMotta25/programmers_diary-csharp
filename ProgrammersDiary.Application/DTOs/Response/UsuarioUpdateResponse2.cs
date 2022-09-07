using System;
using Microsoft.AspNetCore.Identity;

namespace ProgrammersDiary.Application.DTOs.Response
{
    /*
        Tem que retornar um dicionario no formato 

        "errors": {
            "Email": ["The Email field is not a valid e-mail address."]
        }
    */
    public class UsuarioUpdateResponse2
    {
        public bool Succeeded { get; set; }
        public Dictionary<string,string> Errors { get; set; }
        public UsuarioUpdateResponse2(bool sucesso)
        {
            Succeeded = sucesso; 
            // Errors = new Dictionary<string, string>(){
            //     {"username",""},
            //     {"password",""}
            // };
            Errors =  new Dictionary<string,string>();

        }
        public void AdicionarErro(IdentityError error){
            // foreach (var key in Errors.Keys)
            // {
            //     erro = erro.ToLower();
            //     if(erro.Contains(key)) {
            //         Errors[key] = erro;
            //         return;
            //     }
            // }
            // Errors.Add(Guid.NewGuid().ToString(),erro);
            Errors.Add(error.Code,error.Description);
            
        }
    }
}