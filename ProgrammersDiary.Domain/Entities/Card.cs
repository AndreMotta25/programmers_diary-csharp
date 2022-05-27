using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using ProgrammersDiary.Domain.Entities.Shared;

namespace ProgrammersDiary.Domain.Entities
{
    public class Card : Entity
    {
        [Required]
        public string Descricao { get; private set; }
        public int LinguagemId { get; private set; }
        [Required]
        public string Codigo { get; private set; }
        public Linguagem? Linguagem { get; private set; }

        public Card(string nome, string descricao, string codigo, int linguagemId) {
            Nome = nome;
            Descricao = descricao;
            Codigo = codigo;
            LinguagemId = linguagemId; 
        }
        public void AtualizarDados(Card cardAtualizado){
            Nome = cardAtualizado.Nome;
            Descricao = cardAtualizado.Descricao;
            Codigo = cardAtualizado.Codigo;
            // Linguagem = cardAtualizado.Linguagem;
            LinguagemId = cardAtualizado.LinguagemId;
        }
    }
}