using Microsoft.AspNetCore.Mvc;
using ProgrammersDiary.Domain.Entities;
using ProgrammersDiary.Domain.Interfaces.Services;

namespace ProgrammersDiary.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LinguagemController:Controller
    {
        private readonly ILinguagemService _cardService;

        public LinguagemController(ILinguagemService cardService)
        {
            _cardService = cardService;
        }
        [HttpGet]
        public ActionResult<List<Linguagem>> GetAll(){
            var linguagens = _cardService.ObterTodos();
            // if(linguagens is null)
            //    return NotFound(); 
            return Ok(linguagens);   
        }
    }
}