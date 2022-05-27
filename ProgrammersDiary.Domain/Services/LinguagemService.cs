using ProgrammersDiary.Domain.Data.Context;
using ProgrammersDiary.Domain.Entities;
using ProgrammersDiary.Domain.Interfaces;

namespace ProgrammersDiary.Domain.Services
{
    public class LinguagemService : ILinguagemService
    {
        private readonly DataContext _context;

        public LinguagemService(DataContext context)
        {
            _context = context;
        }
        public void Atualizar()
        {
            throw new NotImplementedException();
        }

        public int Criar(Linguagem entidade)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            _context.Dispose();
        }

        public Linguagem? ObterPorId(int id)
        {
            throw new NotImplementedException();
        }

        public List<Linguagem> ObterTodos()
        {
            return  _context.Linguagens.ToList();
        }
    }
}