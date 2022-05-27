using ProgrammersDiary.Domain.Entities;
using ProgrammersDiary.Domain.Interfaces.Repository;
using ProgrammersDiary.Domain.Interfaces.Services;

namespace ProgrammersDiary.Domain.Services
{
    public class LinguagemService : ILinguagemService
    {
        private readonly ILinguagemRepository _repository;

        public LinguagemService(ILinguagemRepository repository)
        {
            _repository = repository;
        }
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

        public void Dispose()
        {
            _repository.Dispose();
        }

        public Linguagem? ObterPorId(int id)
        {
            throw new NotImplementedException();
        }

        public List<Linguagem> ObterTodos()
        {
            return  _repository.ObterTodos();
        }
    }
}