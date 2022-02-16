import React, { createContext, useState } from "react";

export const EditionContext = createContext([]);
const EditionProvider = ({ children }) => {
  const [itemEdition, setItemEdition] = useState({});

  function addEdition(item) {
    setItemEdition(item);
  }
  // vai fazer o put(atualizar) no arquivo json
  function save() {}

  return (
    <EditionContext.Provider
      value={{
        editarItem: itemEdition,
        setEditar: addEdition,
      }}
    >
      {children}
    </EditionContext.Provider>
  );
};

export default EditionProvider;
