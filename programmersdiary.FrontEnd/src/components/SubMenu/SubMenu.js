import React, { useContext } from "react";
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
import { OldItemContext } from "../../context/OldItem/OldItem";

// import crud from "../../utils/crud";
const SubMenu = ({
  item,
  setModalActive,
  setDelete,
  setCardVelho,
  setManipulavelItem,
}) => {
  const { manipulableItem, addManipulableItem, deleteItem } =
    useContext(ManipulateContext);
  const { OldItem, addOldItem } = useContext(OldItemContext);
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
                console.log("manipulableItem: ", manipulableItem);
                console.log("Item: ", item);
                if (manipulableItem.aberto && manipulableItem.id === item.id) {
                  manipulableItem.aberto = false;
                  // crud.atualizar(manipulableItem.id, manipulableItem);
                  addManipulableItem({});
                  console.log("teste");
                }
              }}
            >
              Fechar
            </Button>
          </ListItem>
          <ListItem data-submenu="submenu">
            <Button
              onClick={() => {
                // deleteItem(item.id);
                setDelete(item);
              }}
            >
              Excluir
            </Button>
          </ListItem>
          <ListItem data-submenu="submenu">
            <Button
              onClick={() => {
                setModalActive((opt) => !opt);
                // addManipulableItem(item);
                // addOldItem(item);
                setCardVelho(item);
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
