using System;
using ProgrammersDiary.Domain.Entities;

namespace ProgrammersDiary.Application.DTOs
{
    public class CardResponse
    {
        public int Id { get; set; }
        public string? Nome { get; set; }
        public string? Descricao { get; set; }
        public string? Codigo { get; set; }
        public Linguagem? Linguagem { get; set; }
        public string? UsuarioId { get; set; }
        public string? UsuarioEmail { get; set; }
    }
}