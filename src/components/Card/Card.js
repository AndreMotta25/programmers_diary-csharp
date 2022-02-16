import React from "react";
import { WrapperInfo, Wrapper, Language, Info, Name } from "./styles";
import SubMenu from "../SubMenu/SubMenu";
const Card = ({ card, setModalActive }) => {
  return (
    <Wrapper>
      <Name>{card.nome}</Name>
      <Info>{card.descricao}</Info>
      <WrapperInfo>
        <Language>{card.labelLanguage}</Language>
        {/* aqui vamos passar o obj */}
        <SubMenu item={card} setModalActive={setModalActive} />
      </WrapperInfo>
    </Wrapper>
  );
};

export default Card;
