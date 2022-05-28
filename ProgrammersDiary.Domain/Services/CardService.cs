using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProgrammersDiary.Domain.Entities;
using ProgrammersDiary.Domain.Interfaces.Repository;
using ProgrammersDiary.Domain.Interfaces.Services;

namespace ProgrammersDiary.Domain.Services
{
    public class CardService : ICardService
    {
        private readonly ICardRepository _repository;

        public CardService(ICardRepository repository)
        {
            _repository = repository;
        }
 
        public async Task<Card?> ObterPorId(int id) => 
            await _repository.ObterPorId(id);

        public async Task<List<Card>> ObterTodos() =>
            await _repository.ObterTodos();

        // REVIEW: Falta a regra de negocio aqui
        public async Task<int> Criar(Card entidade) => 
            await _repository.Criar(entidade);

        public async Task Atualizar()
        {
            await _repository.Atualizar();
        }
        public async Task Deletar(int id )
        {
            await _repository.Deletar(id);
        }
        
    }
}