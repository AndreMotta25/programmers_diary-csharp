using ProgrammersDiary.Data.Context;
using ProgrammersDiary.Domain.Entities;
using ProgrammersDiary.Domain.Interfaces.Repository;

namespace ProgrammersDiary.Data.Repository
{
    public class LinguagemRepository : ILinguagemRepository
    {
        public DataContext _context;
        public LinguagemRepository(DataContext context) => _context = context; 
        public void Atualizar()
        {
            throw new NotImplementedException();
        }

        public int Criar(Linguagem entidade)
        {
            throw new NotImplementedException();
        }

        public void Deletar(int id)
        {
            throw new NotImplementedException();
        }

        public void Dispose() => _context.Dispose();

        public Linguagem? ObterPorId(int id)
        {
            throw new NotImplementedException();
        }

        public List<Linguagem> ObterTodos() => 
            _context.Linguagens.ToList();
    }
}