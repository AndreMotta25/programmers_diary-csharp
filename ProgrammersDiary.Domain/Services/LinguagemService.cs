using ProgrammersDiary.Domain.Entities;
using ProgrammersDiary.Domain.Interfaces.Repository;
using ProgrammersDiary.Domain.Interfaces.Services;
using ProgrammersDiary.Domain.Interfaces.Shared;

namespace ProgrammersDiary.Domain.Services
{
    public class LinguagemService : ILinguagemService
    {
        private readonly ILinguagemRepository _repository;

        public LinguagemService(ILinguagemRepository repository)
        {
            _repository = repository;
        }
        public async Task<List<Linguagem>> ObterTodos() => 
            await _repository.ObterTodos();

        Task IShared<Linguagem>.Atualizar()
        {
            throw new NotImplementedException();
        }

        Task<int> IShared<Linguagem>.Criar(Linguagem entidade)
        {
            throw new NotImplementedException();
        }

        Task IShared<Linguagem>.Deletar(int id)
        {
            throw new NotImplementedException();
        }

        Task<Linguagem?> IShared<Linguagem>.ObterPorId(int id)
        {
            throw new NotImplementedException();
        }
    }
}