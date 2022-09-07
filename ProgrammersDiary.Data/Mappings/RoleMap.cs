using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ProgrammersDiary.Data.Mappings
{
    public class RoleMap : IEntityTypeConfiguration<IdentityRole>
    {
        public void Configure(EntityTypeBuilder<IdentityRole> builder)
        {
            builder.HasData(new IdentityRole(){Id = Guid.NewGuid().ToString() ,Name = "usuario", NormalizedName = "usuario".ToUpper()});
        }
    }
}