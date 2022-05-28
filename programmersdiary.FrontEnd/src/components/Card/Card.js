import React, { useContext, useMemo } from "react";
import { WrapperInfo, Wrapper, Language, Info, Name } from "./styles";
import SubMenu from "../SubMenu/SubMenu";
import { ManipulateContext } from "../../context/ManipulaItem/ManipulateItem";

const Card = ({
  card,
  setModalActive,
  color,
  setDelete,
  itemManipulavel,
  setManipulavelItem,
  setCardVelho,
}) => {
  // console.log(`${card.id} x ${itemManipulavel.id}`);
  // console.log(card);
  // console.log(itemManipulavel);
  return (
    <Wrapper
      style={{
        borderColor: color,
      }}
    >
      <Name>{card.nome}</Name>
      <Info>{card.descricao}</Info>
      <WrapperInfo>
        <Language>{card.linguagem.labelLinguagem}</Language>
        {/* aqui vamos passar o obj */}
        <SubMenu
          item={card}
          setModalActive={setModalActive}
          setDelete={setDelete}
          setManipulavelItem={setManipulavelItem}
          setCardVelho={setCardVelho}
        />
      </WrapperInfo>
    </Wrapper>
  );
};

export default Card;
