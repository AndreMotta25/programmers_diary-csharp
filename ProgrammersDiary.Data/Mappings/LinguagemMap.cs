using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProgrammersDiary.Domain.Entities;

namespace ProgrammersDiary.Domain.Data.Mappings
{
    public class LinguagemMap : IEntityTypeConfiguration<Linguagem>
    {
        public void Configure(EntityTypeBuilder<Linguagem> builder)
        {
            builder.HasKey(linguagem => linguagem.Id);

            builder.Property(linguagem => linguagem.Nome)
            .HasColumnType("varchar(100)");

            builder.Property(linguagem => linguagem.LabelLinguagem).HasColumnType("varchar(50)");

            // seeds
            builder.HasData(new List<Linguagem>{
                new Linguagem(1,"babel","js"),
                new Linguagem(2,"css","css"),
                new Linguagem(3,"babel","json"),
                new Linguagem(4,"typescript","ts"),
                new Linguagem(5,"scss","scss"),
                new Linguagem(6,"less","less"),
                new Linguagem(7,"markdown","markdown"),
                new Linguagem(8,"html","html"),
                new Linguagem(9,"php","php"),
                new Linguagem(10,"xml","xml"),
            });
        }
    }
}