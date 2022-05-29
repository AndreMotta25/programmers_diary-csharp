import React from "react";
import { WrapperInfo, Wrapper, Language, Info, Name } from "./styles";
import SubMenu from "../SubMenu/SubMenu";

const Card = ({ card, setModalActive, color, setCardVelho, setDeletar }) => {
  return (
    <Wrapper
      style={{
        borderColor: color,
      }}
      onClick={(e) => {
        e.stopPropagation();
        let menuClicado = e.currentTarget.querySelector(".subMenu");
        if (!menuClicado.contains(e.target)) {
          setCardVelho(card);
          setModalActive(true);
        }
      }}
    >
      <Name>{card.nome}</Name>
      <Info>{card.descricao}</Info>
      <WrapperInfo>
        <Language>{card.linguagem.labelLinguagem}</Language>
        <SubMenu item={card} setDelete={setDeletar} />
      </WrapperInfo>
    </Wrapper>
  );
};

export default React.memo(Card);
