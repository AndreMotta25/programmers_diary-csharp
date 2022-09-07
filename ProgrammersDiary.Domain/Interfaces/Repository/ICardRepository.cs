using Microsoft.AspNetCore.Mvc;
using ProgrammersDiary.Domain.Entities;
using ProgrammersDiary.Domain.Interfaces.Shared;

namespace ProgrammersDiary.Domain.Interfaces.Repository
{
    public interface ICardRepository:IShared<Card>,IAsyncDisposable
    {
         public Task<List<Card>> GetCards(string email);
    }
}