using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProgrammersDiary.Domain.Entities.Shared
{
    public class Entity
    {
        [Required]
        public int Id { get; protected set; }
        [Required]
        public string Nome { get;  set; }
    }
}