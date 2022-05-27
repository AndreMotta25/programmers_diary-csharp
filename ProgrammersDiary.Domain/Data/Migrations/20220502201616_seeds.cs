using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProgrammersDiary.Domain.Data.Migrations
{
    public partial class seeds : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Linguagens",
                columns: new[] { "Id", "LabelLinguagem", "Nome" },
                values: new object[] { 1, "js", "javascript" });

            migrationBuilder.InsertData(
                table: "Linguagens",
                columns: new[] { "Id", "LabelLinguagem", "Nome" },
                values: new object[] { 2, "css", "css" });

            migrationBuilder.InsertData(
                table: "Linguagens",
                columns: new[] { "Id", "LabelLinguagem", "Nome" },
                values: new object[] { 3, "html", "html" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Linguagens",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Linguagens",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Linguagens",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
