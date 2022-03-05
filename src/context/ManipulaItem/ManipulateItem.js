import React, { createContext, useState } from "react";
import crud from "../../utils/crud";
export const ManipulateContext = createContext([]);

const ManipulateProvider = ({ children }) => {
  const [manipulableItemHook, setManipulableItem] = useState({});
  const [cards, setCards] = useState([]);

  function manipulate(item) {
    setManipulableItem(item);
  }
  function setAddCards(cards) {
    setCards(cards);
  }
  function del(id) {
    crud.excluir(id);
    let cardsRestantes = cards.filter((card) => card.id !== id);
    setAddCards(cardsRestantes);
  }

  return (
    <ManipulateContext.Provider
      value={{
        manipulableItem: manipulableItemHook,
        allCards: cards,
        addManipulableItem: manipulate,
        addCards: setAddCards,
        deleteItem: del,
      }}
    >
      {children}
    </ManipulateContext.Provider>
  );
};

export default ManipulateProvider;
