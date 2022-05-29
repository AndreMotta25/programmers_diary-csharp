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
      <WrapperSubMenu className="protected subMenu">
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
              <AiFillDelete size={"20px"} color={"red"} className="protected" />
            </Button>
          </ListItem>
        </List>
      </WrapperSubMenu>
    </>
  );
};

export default SubMenu;
