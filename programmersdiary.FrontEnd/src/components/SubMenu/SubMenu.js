import React from "react";
import url from "../../assets/teste.png";
import { AiFillDelete } from "react-icons/ai";
import * as S from "./styles";

const SubMenu = ({ item, deleteCard }) => {
  return (
    <>
      <S.WrapperSubMenu className="subMenu">
        <S.WrapperDots>
          <S.DotsMenu src={url} />
        </S.WrapperDots>

        <S.List>
          <S.ListItem data-submenu="submenu">
            <S.Button
              onClick={() => {
                deleteCard(item.id);
              }}
            >
              <AiFillDelete size={"18px"} color={"red"} />
            </S.Button>
          </S.ListItem>
        </S.List>
      </S.WrapperSubMenu>
    </>
  );
};

export default SubMenu;
