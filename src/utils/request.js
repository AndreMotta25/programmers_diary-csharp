async function fetchData(url) {
  const data = await (await fetch(url)).json();
  return data;
}
export default {
  getAll: async (url) => {
    return await fetchData(url);
  },
  // atualizar
  // excluir
  // inserir
};
