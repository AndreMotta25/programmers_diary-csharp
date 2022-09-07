using ProgrammersDiary.Domain.Entities;

namespace ProgrammersDiary.Api.DTOs
{
    public class CardRequest
    {
        public CardRequest(string nome, string descricao, string codigo, int linguagemId, string usuarioId)
        {
            Nome = nome;
            Descricao = descricao;
            Codigo = codigo;
            LinguagemId = linguagemId;
            UsuarioId = usuarioId;
        }


        public Card ConverteParaEntidade() {
            return new Card(Nome,Descricao,Codigo,LinguagemId,UsuarioId);
        }

        public string Nome { get; set; }
        public string Descricao { get; set; }
        public string Codigo { get; set; }

        public int LinguagemId {get;set;}
        public string UsuarioId { get; set; }
    }
}