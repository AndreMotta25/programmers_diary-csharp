using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProgrammersDiary.Data.SqlServer.Migrations
{
    public partial class inicio : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Linguagens",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LabelLinguagem = table.Column<string>(type: "varchar(50)", nullable: false),
                    Nome = table.Column<string>(type: "varchar(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Linguagens", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Cards",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Descricao = table.Column<string>(type: "text", nullable: false),
                    LinguagemId = table.Column<int>(type: "int", nullable: false),
                    Codigo = table.Column<string>(type: "text", nullable: false),
                    Nome = table.Column<string>(type: "varchar(255)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cards", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Cards_Linguagens_LinguagemId",
                        column: x => x.LinguagemId,
                        principalTable: "Linguagens",
                        principalColumn: "Id");
                });

            migrationBuilder.InsertData(
                table: "Linguagens",
                columns: new[] { "Id", "LabelLinguagem", "Nome" },
                values: new object[,]
                {
                    { 1, "js", "babel" },
                    { 2, "css", "css" },
                    { 3, "json", "babel" },
                    { 4, "ts", "typescript" },
                    { 5, "scss", "scss" },
                    { 6, "less", "less" },
                    { 7, "markdown", "markdown" },
                    { 8, "html", "html" },
                    { 9, "php", "php" },
                    { 10, "xml", "xml" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cards_LinguagemId",
                table: "Cards",
                column: "LinguagemId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cards");

            migrationBuilder.DropTable(
                name: "Linguagens");
        }
    }
}
