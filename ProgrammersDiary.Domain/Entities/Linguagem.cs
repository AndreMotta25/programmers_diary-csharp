using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using ProgrammersDiary.Domain.Entities.Shared;

namespace ProgrammersDiary.Domain.Entities
{
    public class Linguagem : Entity
    {
        // esse json ignore tem que estar aqui para não dar erro
        [JsonIgnore]
        public List<Card>? Cards { get; set; }
        public string LabelLinguagem { get; set; }

        public Linguagem(int id, string nome, string labelLanguage)
        {
            Id = id;
            Nome = nome;
            LabelLinguagem = labelLanguage;
        }
        public Linguagem(){}
    }
}