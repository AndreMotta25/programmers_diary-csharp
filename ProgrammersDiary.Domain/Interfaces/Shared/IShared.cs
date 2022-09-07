using ProgrammersDiary.Domain.Entities.Shared;

namespace ProgrammersDiary.Domain.Interfaces.Shared
{
    public interface IShared<TEntity> where TEntity:Entity
    {
        public Task<List<TEntity>> ObterTodos();
        public Task<TEntity?> ObterPorId(int id);
        public Task<int> Criar(TEntity entidade);
        public Task Atualizar();
        public Task Deletar(int id);

    }
}