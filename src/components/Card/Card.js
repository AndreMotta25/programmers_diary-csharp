import React from "react";
import { WrapperInfo, Wrapper, Language, Info, Name } from "./styles";
import SubMenu from "../SubMenu/SubMenu";
const Card = ({ card, setModalActive, setCards, cards }) => {
  return (
    <Wrapper>
      <Name>{card.nome}</Name>
      <Info>{card.descricao}</Info>
      <WrapperInfo>
        <Language>{card.labelLanguage}</Language>
        {/* aqui vamos passar o obj */}
        <SubMenu
          item={card}
          setModalActive={setModalActive}
          setCards={setCards}
          cards={cards}
        />
      </WrapperInfo>
    </Wrapper>
  );
};

export default Card;
