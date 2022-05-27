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
 
        public Card? ObterPorId(int id)
        {
            return _repository.ObterPorId(id);
        }

        public List<Card> ObterTodos()
        {
            return _repository.ObterTodos();
        }

        // REVIEW: Falta a regra de negocio aqui
        public int Criar(Card entidade)
        {
            return _repository.Criar(entidade);
        }

        public void Atualizar()
        {
            _repository.Atualizar();
        }
        public void Deletar(int id )
        {
            _repository.Deletar(id);
        }
        public void Dispose()
        {
            _repository.Dispose();
        }
    }
}