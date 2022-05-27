using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProgrammersDiary.Domain.Data.Migrations
{
    public partial class adicionandotodasaslinguagens : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Linguagens",
                keyColumn: "Id",
                keyValue: 1,
                column: "Nome",
                value: "babel");

            migrationBuilder.UpdateData(
                table: "Linguagens",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "LabelLinguagem", "Nome" },
                values: new object[] { "json", "babel" });

            migrationBuilder.InsertData(
                table: "Linguagens",
                columns: new[] { "Id", "LabelLinguagem", "Nome" },
                values: new object[,]
                {
                    { 4, "ts", "typescript" },
                    { 5, "scss", "scss" },
                    { 6, "less", "less" },
                    { 7, "markdown", "markdown" },
                    { 8, "html", "html" },
                    { 9, "php", "php" },
                    { 10, "xml", "xml" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Linguagens",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Linguagens",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Linguagens",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Linguagens",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Linguagens",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Linguagens",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Linguagens",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.UpdateData(
                table: "Linguagens",
                keyColumn: "Id",
                keyValue: 1,
                column: "Nome",
                value: "javascript");

            migrationBuilder.UpdateData(
                table: "Linguagens",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "LabelLinguagem", "Nome" },
                values: new object[] { "html", "html" });
        }
    }
}
