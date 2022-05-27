using ProgrammersDiary.Domain.Entities.Shared;

namespace ProgrammersDiary.Domain.Interfaces.Shared
{
    public interface IShared<TEntity>: IDisposable where TEntity: Entity
    {
        public List<TEntity> ObterTodos();
        public TEntity? ObterPorId(int id);
        public int Criar(TEntity entidade);
        public void Atualizar();
        public void Deletar(int id);
    }
}