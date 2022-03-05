import React, { useContext } from "react";
import { WrapperInfo, Wrapper, Language, Info, Name } from "./styles";
import SubMenu from "../SubMenu/SubMenu";
import { ManipulateContext } from "../../context/ManipulaItem/ManipulateItem";

const Card = ({ card, setModalActive }) => {
  const { manipulableItem } = useContext(ManipulateContext);
  return (
    <Wrapper
      style={{
        borderColor: card.id == manipulableItem.id ? "white" : "black",
      }}
    >
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
