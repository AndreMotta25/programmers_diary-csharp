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
  setDeletar,
}) => {
  return (
    <Wrapper
      style={{
        borderColor: color,
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (!e.target.classList.contains("protected")) {
          setCardVelho(card);
          setModalActive(true);
        }
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
          setDelete={setDeletar}
          setManipulavelItem={setManipulavelItem}
          setCardVelho={setCardVelho}
        />
      </WrapperInfo>
    </Wrapper>
  );
};

export default Card;
