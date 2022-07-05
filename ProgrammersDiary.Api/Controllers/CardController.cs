using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
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
    // [Authorize(Roles = "usuario")]
    public class CardController : Controller
    {
        private readonly ICardService _cardService;

        public CardController(ICardService cardService)
        {
            _cardService = cardService;
        }

        // Pegar uma lista de cards
        // Depois implemetar um modo, que só pode ver os cards quem está autenticado e
        // só vai poder ver seus proprios cards, isso atraves do id do usuario
        // o id do usuario aqui vai ser um guid, tornando muito mais seguro
        [HttpGet]
        public async Task<ActionResult<List<Card>>> GetTodos() {
            var cards = await _cardService.ObterTodos(); 
            return Ok(cards);
        }

        // Pegar por id
        [HttpGet("{id}")]
        public async Task<ActionResult<Card?>> GetCardPorId(int id) {
            Card? card = await _cardService.ObterPorId(id); 
            if(card is null) 
                return  NotFound();
            return Ok(card);
        }

        // Criar
        [HttpPost]
        public async Task<ActionResult> CriarCard(CardRequest cardRequest) {
            var id = await _cardService.Criar(cardRequest.ConverteParaEntidade());
            return CreatedAtAction(nameof(GetCardPorId), new {Id = id},id);
        }

        // Atualizar
        [HttpPut("{id}")]
        public async Task<ActionResult> AtualizarCard(int id, CardRequest cardAtualizado){
            var cardOriginal = await _cardService.ObterPorId(id);
            if(cardOriginal is null)
                return NotFound();
            cardOriginal.AtualizarDados(cardAtualizado.ConverteParaEntidade()); 
            /*
                Eu só preciso pegar o objeto e atualizar os dados, não preciso de 
                passar para o metodo atualizar pq o entity ja fica rastreando o objeto modificado, então depois de atualizado é só chamar 
                o saveChanges()
            */  
            await _cardService.Atualizar();    
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteCard(int id) {
            try{
                await _cardService.Deletar(id);
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