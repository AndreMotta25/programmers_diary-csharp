using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProgrammersDiary.Domain.Data.Migrations
{
    public partial class AdicionandoalabelLanguage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "LabelLinguagem",
                table: "Linguagens",
                type: "varchar(50)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LabelLinguagem",
                table: "Linguagens");
        }
    }
}
