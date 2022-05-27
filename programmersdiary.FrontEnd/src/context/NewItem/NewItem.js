import React, { createContext, useState } from "react";
export const NewItemContext = createContext([]);

/*
  A minha ideia para esse contexto, é a seguinte: só vou usar ele quando criarmos um item novo, esse contexto
  vai ter que ser responsavel por acionar um effect que adicione o [objeto novo] dentro do contexto 
  manipulavel;
*/
const NewItemProvider = ({ children }) => {
  const [newItemCard, setNewItem] = useState({});

  return (
    <NewItemContext.Provider
      value={{
        newItem: newItemCard,
        addNewItem: setNewItem,
      }}
    >
      {children}
    </NewItemContext.Provider>
  );
};

export default NewItemProvider;
