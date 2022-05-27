using Microsoft.EntityFrameworkCore;
using ProgrammersDiary.Data.Context;
using ProgrammersDiary.Domain.Entities;
using ProgrammersDiary.Domain.Interfaces.Repository;
using System;

namespace SqlServer.Repository
{
    public class CardRepository : ICardRepository
    {
        public DataContext _context;
        public CardRepository(DataContext context) => _context = context;


        public void Atualizar() =>
            _context.SaveChanges();

        public int Criar(Card entidade)
        {
            _context.Cards.Add(entidade);
            _context.SaveChanges();
            return entidade.Id;
        }

        public void Deletar(int id)
        {
            var card = ObterPorId(id);
            if (card is null )
                throw new Exception("O card solicitado não existe");
            _context.Cards.Remove(card);    
            _context.SaveChanges();
        }

        public void Dispose() =>
            _context.Dispose();

        public Card? ObterPorId(int id) => 
            _context.Cards.Include(card => card.Linguagem).FirstOrDefault(card => card.Id == id);

        public List<Card> ObterTodos() =>
            _context.Cards.Include(card => card.Linguagem).ToList();
        
    }
}