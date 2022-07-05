using System;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Identity;

namespace ProgrammersDiary.Domain.Entities
{
    public class User:IdentityUser
    {
        [JsonIgnore]
        public List<Card> Cards { get; set; }
    }
}