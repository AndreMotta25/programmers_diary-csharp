using Microsoft.EntityFrameworkCore;
using ProgrammersDiary.Data.Context;
using ProgrammersDiary.Domain.Entities;
using ProgrammersDiary.Domain.Interfaces.Repository;

namespace ProgrammersDiary.Data.Repository
{
    public class LinguagemRepository : ILinguagemRepository
    {
        public DataContext _context;
        public LinguagemRepository(DataContext context) => _context = context; 
        public Task Atualizar()
        {
            throw new NotImplementedException();
        }

        public Task<int> Criar(Linguagem entidade)
        {
            throw new NotImplementedException();
        }

        public Task Deletar(int id)
        {
            throw new NotImplementedException();
        }

        public async ValueTask DisposeAsync() =>
            await _context.DisposeAsync();

        public Task<Linguagem?> ObterPorId(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<List<Linguagem>> ObterTodos() => 
            await _context.Linguagens.ToListAsync();
    }
}