using Microsoft.AspNetCore.Mvc;
using ProgrammersDiary.Domain.Entities;
using ProgrammersDiary.Domain.Interfaces.Services;

namespace ProgrammersDiary.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LinguagemController:Controller
    {
        private readonly ILinguagemService _cardService;

        public LinguagemController(ILinguagemService cardService)
        {
            _cardService = cardService;
        }
        [HttpGet]
        public async Task<ActionResult<List<Linguagem>>> GetAll(){
            var linguagens = await _cardService.ObterTodos();
            // if(linguagens is null)
            //    return NotFound(); 
            return Ok(linguagens);   
        }
    }
}