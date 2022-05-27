import React, { createContext, useState } from "react";
export const OldItemContext = createContext([]);

/*
  A minha ideia para esse contexto, é a seguinte: só vou usar ele quando criarmos um item novo, esse contexto
  vai ter que ser responsavel por acionar um effect que adicione o [objeto novo] dentro do contexto 
  manipulavel;
*/
const OldItemProvider = ({ children }) => {
  const [OldItemCard, setOldItem] = useState({});

  return (
    <OldItemContext.Provider
      value={{
        OldItem: OldItemCard,
        addOldItem: setOldItem,
      }}
    >
      {children}
    </OldItemContext.Provider>
  );
};

export default OldItemProvider;
