using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProgrammersDiary.Data.Migrations
{
    public partial class adicionandorole : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "1b4f07f5-4327-42b5-b4b4-b3b7c7f2147e", "94d94529-fc2a-401a-a69f-8ba9c4d7481e", "usuario", null });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1b4f07f5-4327-42b5-b4b4-b3b7c7f2147e");
        }
    }
}
