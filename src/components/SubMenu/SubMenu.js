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
const SubMenu = ({ item, setModalActive }) => {
  const { manipulableItem, addManipulableItem, deleteItem } =
    useContext(ManipulateContext);
  return (
    <>
      <WrapperSubMenu>
        <WrapperDots>
          <DotsMenu src={url} />
        </WrapperDots>

        <List>
          <ListItem data-submenu="submenu">
            <Button
              onClick={() => {
                if (manipulableItem.aberto && manipulableItem.id === item.id) {
                  manipulableItem.aberto = false;
                  crud.atualizar(manipulableItem.id, manipulableItem);
                  addManipulableItem({});
                }
              }}
            >
              Fechar
            </Button>
          </ListItem>
          <ListItem data-submenu="submenu">
            <Button
              onClick={() => {
                deleteItem(item.id);
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
              Abrir
            </Button>
          </ListItem>
        </List>
      </WrapperSubMenu>
    </>
  );
};

export default SubMenu;
