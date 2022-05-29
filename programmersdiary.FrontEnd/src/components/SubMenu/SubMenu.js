import React from "react";
import {
  List,
  ListItem,
  WrapperSubMenu,
  DotsMenu,
  WrapperDots,
  Button,
} from "./styles";
import url from "../../assets/teste.png";
import { AiFillDelete } from "react-icons/ai";
const SubMenu = ({ item, setDelete }) => {
  return (
    <>
      <WrapperSubMenu className="subMenu">
        <WrapperDots>
          <DotsMenu src={url} />
        </WrapperDots>

        <List>
          <ListItem data-submenu="submenu">
            <Button
              onClick={() => {
                setDelete({ ...item, decisao: true });
              }}
            >
              <AiFillDelete size={"18px"} color={"red"} />
            </Button>
          </ListItem>
        </List>
      </WrapperSubMenu>
    </>
  );
};

export default SubMenu;
