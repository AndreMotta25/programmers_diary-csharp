using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProgrammersDiary.Domain.Data.Context;
using ProgrammersDiary.Domain.Entities;
using ProgrammersDiary.Domain.Interfaces;

namespace ProgrammersDiary.Domain.Services
{
    public class CardService : ICardService
    {
        private readonly DataContext _context;

        public CardService(DataContext context)
        {
            _context = context;
        }
 
        public Card? ObterPorId(int id)
        {
            return _context.Cards.Include(card => card.Linguagem).FirstOrDefault(card => card.Id == id);
        }

        public List<Card> ObterTodos()
        {
            return _context.Cards.Include(card => card.Linguagem).ToList();
        }

        public int Criar(Card entidade)
        {
            _context.Cards.Add(entidade);
            _context.SaveChanges();
            return entidade.Id;
        }

        public void Atualizar()
        {
            // cardOriginal.AtualizarDados(cardAtualizado);
            _context.SaveChanges();
        }

       
        public void Dispose()
        {
            _context.Dispose();
        }

        public void Delete(int id )
        {
            var card = ObterPorId(id);
            if (card is null )
                throw new Exception("O card solicitado não existe");
            _context.Cards.Remove(card);    
            _context.SaveChanges();
        }
    }
}