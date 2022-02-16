import React, { createContext, useState } from "react";

export const CriationContext = createContext([]);
const CriationProvider = ({ children }) => {
  const [itemCriation, setItemCriation] = useState({});

  function addCriation(item) {
    setItemCriation(item);
  }

  return (
    <CriationContext.Provider
      value={{
        criationItem: itemCriation,
        setItemCriation: addCriation,
      }}
    >
      {children}
    </CriationContext.Provider>
  );
};

export default CriationProvider;
