using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProgrammersDiary.Domain.Entities;

namespace ProgrammersDiary.Domain.Data.Mappings
{
    public class CardMap : IEntityTypeConfiguration<Card>
    {
        public void Configure(EntityTypeBuilder<Card> builder)
        {
            builder.HasKey(card => card.Id);
            // fazendo a tipagem
            builder.Property(card => card.Nome).HasColumnType("varchar(255)");
            builder.Property(card => card.Descricao).HasColumnType("text");
            builder.Property(card => card.Codigo).HasColumnType("text");

            // Card vai ter uma linguagem, mas uma linguagem pode ter n cards
            builder.HasOne(card => card.Linguagem)
                   .WithMany(linguagem => linguagem.Cards)
                   .HasForeignKey(card => card.LinguagemId)
                   .OnDelete(DeleteBehavior.NoAction);
                    
            builder.HasOne(card => card.Usuario)
                   .WithMany(usuario => usuario.Cards)
                   .HasForeignKey(card => card.UsuarioId)
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}