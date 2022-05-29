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
  return (
    <>
      <WrapperSubMenu className="protected">
        <WrapperDots className="protected">
          <DotsMenu src={url} className="protected" />
        </WrapperDots>

        <List className="protected">
          <ListItem data-submenu="submenu" className="protected">
            <Button
              className="protected"
              onClick={() => {
                setDelete({ ...item, decisao: true });
              }}
            >
              Excluir
            </Button>
          </ListItem>
        </List>
      </WrapperSubMenu>
    </>
  );
};

export default SubMenu;
