using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProgrammersDiary.Api.DTOs;
using ProgrammersDiary.Domain.Entities;
using ProgrammersDiary.Domain.Interfaces.Services;

namespace ProgrammersDiary.Api.Controllers
{
    // se ficar sem esse apiController, o post em modo body request não funciona
    [ApiController]
    [Route("[controller]")]
    public class CardController : Controller
    {
        private readonly ICardService _cardService;

        public CardController(ICardService cardService)
        {
            _cardService = cardService;
        }

        // Pegar uma lista de cards
        [HttpGet]
        public ActionResult<List<Card>> GetTodos() {
            var cards = _cardService.ObterTodos(); 
            return Ok(cards);
        }

        // Pegar por id
        [HttpGet("{id}")]
        public ActionResult<Card?> GetCardPorId(int id) {
            Card? card = _cardService.ObterPorId(id); 
            if(card is null) 
                return  NotFound();
            return Ok(card);
        }

        // Criar
        [HttpPost]
        public ActionResult CriarCard(CardRequest cardRequest) {
            var id = _cardService.Criar(cardRequest.ConverteParaEntidade());
            return CreatedAtAction(nameof(GetCardPorId), new {Id = id},id);
        }

        // Atualizar
        [HttpPut("{id}")]
        public ActionResult AtualizarCard(int id, CardRequest cardAtualizado){
            var cardOriginal = _cardService.ObterPorId(id);
            if(cardOriginal is null)
                return NotFound();
            cardOriginal.AtualizarDados(cardAtualizado.ConverteParaEntidade()); 
            /*
                Eu só preciso pegar o objeto e atualizar os dados, não preciso de 
                passar para o metodo atualizar pq o entity ja fica rastreando o objeto modificado, então depois de atualizado é só chamar 
                o saveChanges()
            */  
            _cardService.Atualizar();    
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteCard(int id) {
            try{
                _cardService.Deletar(id);
                return NoContent();
            }
            catch(Exception ex) {
                if(ex.Message.Contains("não existe"))
                    return NotFound();
                return BadRequest();    
            }
        }
    }
}