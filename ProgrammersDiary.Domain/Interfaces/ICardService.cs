using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProgrammersDiary.Domain.Entities;
using ProgrammersDiary.Domain.Interfaces.Shared;

namespace ProgrammersDiary.Domain.Interfaces
{
    public interface ICardService:ISharedService<Card>    {
        
    }
}