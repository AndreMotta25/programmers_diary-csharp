using Microsoft.IdentityModel.Tokens;

namespace ProgrammersDiary.Identity.Configuration
{
    public class JwtOptions
    {
        public string Issuer { get; set; }
        public string Audience {get; set;}
        public int  Expire { get; set; }
        public SigningCredentials SigningCredentials { get; set; }
    }
}