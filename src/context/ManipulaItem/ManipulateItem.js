import React, { createContext, useState } from "react";

export const ManipulateContext = createContext([]);

const ManipulateProvider = ({ children }) => {
  const [manipulableItemHook, setManipulableItem] = useState({});

  function manipulate(item) {
    setManipulableItem(item);
  }

  return (
    <ManipulateContext.Provider
      value={{
        manipulableItem: manipulableItemHook,
        addManipulableItem: manipulate,
      }}
    >
      {children}
    </ManipulateContext.Provider>
  );
};

export default ManipulateProvider;
