using ProgrammersDiary.Domain.Entities;
using ProgrammersDiary.Domain.Interfaces.Shared;

namespace ProgrammersDiary.Domain.Interfaces.Repository
{
    public interface ILinguagemRepository:IShared<Linguagem>,IAsyncDisposable
    {
         
    }
}