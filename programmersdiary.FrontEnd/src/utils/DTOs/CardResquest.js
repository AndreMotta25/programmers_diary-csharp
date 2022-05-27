export default class CardResquest {
  Nome;
  Codigo;
  LinguagemId;
  Descricao;

  constructor(nome, descricao, linguagemId, codigo) {
    this.Nome = nome;
    this.Descricao = descricao;
    this.LinguagemId = linguagemId;
    this.Codigo = codigo;
  }
}
