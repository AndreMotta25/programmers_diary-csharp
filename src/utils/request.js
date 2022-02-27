async function fetchData(url) {
  const data = await (await fetch(url)).json();
  return data;
}
export default {
  // buscar
  getAll: async (url) => {
    return await fetchData(url);
  },
  // atualizar
  atualizar: (id, obj) => {
    fetch(`http://localhost:3333/cards/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  },
  inserir(obj) {
    fetch(`http://localhost:3333/cards/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  },
  // excluir
  // inserir
};
