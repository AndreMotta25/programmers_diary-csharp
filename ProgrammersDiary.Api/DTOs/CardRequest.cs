using ProgrammersDiary.Domain.Entities;

namespace ProgrammersDiary.BackEnd.DTOs
{
    public class CardRequest
    {
        public CardRequest(string nome, string descricao, string codigo, int linguagemId)
        {
            Nome = nome;
            Descricao = descricao;
            Codigo = codigo;
            LinguagemId = linguagemId;
        }


        public Card ConverteParaEntidade() {
            return new Card(Nome,Descricao,Codigo,LinguagemId);
        }

        public string Nome { get; set; }
        public string Descricao { get; set; }
        public string Codigo { get; set; }

        public int LinguagemId {get;set;}
    }
}