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
import { EditionContext } from "../../context/Edition/Edition";
import { CriationContext } from "../../context/Criation/Criation";
const SubMenu = ({ item, setModalActive }) => {
  const { editarItem, setEditar } = useContext(EditionContext);
  const { criationItem, setItemCriation } = useContext(CriationContext);
  return (
    <>
      <WrapperSubMenu>
        <WrapperDots>
          <DotsMenu src={url} />
        </WrapperDots>

        <List>
          <ListItem data-submenu="submenu">Abrir</ListItem>
          <ListItem data-submenu="submenu">Excluir</ListItem>
          <ListItem data-submenu="submenu">
            <Button
              onClick={() => {
                setModalActive((opt) => !opt);
                setItemCriation(item);
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
