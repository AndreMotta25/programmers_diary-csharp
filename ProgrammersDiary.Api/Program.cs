
using ProgrammersDiary.Domain.Interfaces;
using ProgrammersDiary.Domain.Services;
using Microsoft.EntityFrameworkCore;
using ProgrammersDiary.Data.Context;
using ProgrammersDiary.Domain.Interfaces.Services;
using ProgrammersDiary.Domain.Interfaces.Repository;
using SqlServer.Repository;
using ProgrammersDiary.Data.Repository;
using ProgrammersDiary.Api.IocInjection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();

// builder.Services.AddDbContext<DataContext>(options => {
//     options.UseSqlServer(builder.Configuration.GetConnectionString("Andre"));
//     options.EnableSensitiveDataLogging();
//     });

builder.Services.AddScoped<ICardService, CardService>();
builder.Services.AddScoped<ILinguagemService, LinguagemService>();
builder.Services.AddScoped<ICardRepository, CardRepository>();
builder.Services.AddScoped<ILinguagemRepository, LinguagemRepository>();

// injections customizadas

builder.Services.AddIdentityService(builder.Configuration);
builder.Services.AddTokenService(builder.Configuration);
builder.Services.AddSwaggerService(builder.Configuration);

var app = builder.Build();


// builder.Services.AddDbContext<DataContext>(options => )
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(builder => builder.SetIsOriginAllowed(origin => true).AllowAnyMethod().AllowAnyHeader());
app.UseHttpsRedirection();

app.UseAuthentication().UseAuthorization();

app.MapControllers();

app.Run();
