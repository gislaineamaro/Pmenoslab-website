using Microsoft.EntityFrameworkCore.Migrations;

namespace PmenosLab.Migrations
{
    public partial class AttSubscriptionsField : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Subscriptions",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "currentPosition",
                table: "Subscriptions",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "linkedin",
                table: "Subscriptions",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "position",
                table: "Subscriptions",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "Subscriptions");

            migrationBuilder.DropColumn(
                name: "currentPosition",
                table: "Subscriptions");

            migrationBuilder.DropColumn(
                name: "linkedin",
                table: "Subscriptions");

            migrationBuilder.DropColumn(
                name: "position",
                table: "Subscriptions");
        }
    }
}
