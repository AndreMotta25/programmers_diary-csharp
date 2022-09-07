
using ProgrammersDiary.Domain.Entities;
using ProgrammersDiary.Domain.Interfaces.Shared;

namespace ProgrammersDiary.Domain.Interfaces.Services
{
    public interface ICardService:IShared<Card>    {
        public Task<List<Card>> GetCards(string email);
    }
}