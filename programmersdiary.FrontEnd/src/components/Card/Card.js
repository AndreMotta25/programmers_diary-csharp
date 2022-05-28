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
  return (
    <Wrapper
      style={{
        borderColor: color,
      }}
      onClick={(e) => {
        if (
          !e.currentTarget ==
          document.querySelector("#wrapperMenu").contains(e.target)
        ) {
          setCardVelho(card);
          setModalActive((opt) => !opt);
          console.log(e);
        } else {
          console.log("adsad");
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
          setDelete={setDelete}
          setManipulavelItem={setManipulavelItem}
          setCardVelho={setCardVelho}
        />
      </WrapperInfo>
    </Wrapper>
  );
};

export default Card;
