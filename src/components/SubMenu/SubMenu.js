import React, { useEffect, useState, useContext } from "react";
import {
  List,
  ListItem,
  WrapperSubMenu,
  DotsMenu,
  WrapperDots,
  Button,
} from "./styles";
import url from "../../assets/teste.png";
import { ManipulateContext } from "../../context/ManipulaItem/ManipulateItem";
import crud from "../../utils/crud";
const SubMenu = ({ item, setModalActive, setCards, cards }) => {
  const { manipulableItem, addManipulableItem } = useContext(ManipulateContext);
  return (
    <>
      <WrapperSubMenu>
        <WrapperDots>
          <DotsMenu src={url} />
        </WrapperDots>

        <List>
          <ListItem data-submenu="submenu">Abrir</ListItem>
          <ListItem data-submenu="submenu">
            <Button
              onClick={() => {
                crud.excluir(item.id);
                let cardsRestantes = cards.filter(
                  (card) => card.id !== item.id
                );
                setCards(cardsRestantes);
              }}
            >
              Excluir
            </Button>
          </ListItem>
          <ListItem data-submenu="submenu">
            <Button
              onClick={() => {
                setModalActive((opt) => !opt);
                addManipulableItem(item);
              }}
            >
              Editar
            </Button>
          </ListItem>
        </List>
      </WrapperSubMenu>
    </>
  );
};

export default SubMenu;
