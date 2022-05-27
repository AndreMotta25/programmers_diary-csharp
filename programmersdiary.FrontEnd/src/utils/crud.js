import CardResquest from "./DTOs/CardResquest";

async function fetchData(url) {
  const data = await (await fetch(url)).json();
  return data;
}
export default {
  getAll: async (url) => {
    return await fetchData(url);
  },
  atualizar: (id, obj) => {
    let entidade = new CardResquest(
      obj.nome,
      obj.descricao,
      obj.linguagemId,
      obj.codigo
    );
    fetch(`/card/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entidade),
    });
  },
  inserir: async (obj) => {
    let entidade = new CardResquest(
      obj.nome,
      obj.descricao,
      obj.linguagemId,
      obj.codigo
    );
    return await (
      await fetch(`/card`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entidade),
      })
    ).json();
  },
  excluir(id) {
    fetch(`/card/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
