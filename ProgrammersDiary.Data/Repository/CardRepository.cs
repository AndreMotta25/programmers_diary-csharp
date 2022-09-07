using Microsoft.AspNetCore.Mvc;
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


        public async Task Atualizar() =>
            await _context.SaveChangesAsync();

        public async  Task<int> Criar(Card entidade)
        {
            await _context.Cards.AddAsync(entidade);
            await _context.SaveChangesAsync();
            return entidade.Id;
        }

        public async Task Deletar(int id)
        {
            var card = await ObterPorId(id);
            if (card is null )
                throw new Exception("O card solicitado não existe");
            _context.Cards.Remove(card);    
            await _context.SaveChangesAsync();
        }

        public async Task<Card?> ObterPorId(int id) => 
            await _context.Cards.Include(card => card.Linguagem).FirstOrDefaultAsync(card => card.Id == id);

        public async Task<List<Card>> ObterTodos() =>
           await _context.Cards.Include(card => card.Linguagem).ToListAsync();

        public async ValueTask DisposeAsync() =>
            await _context.DisposeAsync();

        public async Task<List<Card>> GetCards(string email)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
            return await _context.Cards.Include(c => c.Usuario).Include(c => c.Linguagem).Where(c => c.UsuarioId == user.Id).ToListAsync();
            
        }
    }
}