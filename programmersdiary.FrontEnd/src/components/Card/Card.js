import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import SubMenu from "../SubMenu/SubMenu";
import * as S from "./styles";

const Card = ({ card, setModalActive, color, setCardVelho, setDeletar }) => {
  console.log(card.novo);
  const wrapper = useRef(null);

  useEffect(() => {
    if (card.novo) wrapper.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <S.Wrapper
      ref={wrapper}
      style={{
        borderColor: color,
      }}
      className={card.novo === true ? "novo" : ""}
      onClick={(e) => {
        e.stopPropagation();
        let menuClicado = e.currentTarget.querySelector(".subMenu");
        if (!menuClicado.contains(e.target)) {
          setCardVelho(card);
          setModalActive(true);
        }
      }}
    >
      <S.Name>{card.nome}</S.Name>
      <S.Info>{card.descricao}</S.Info>
      <S.WrapperInfo>
        <S.Language>{card.linguagem.labelLinguagem}</S.Language>
        <SubMenu item={card} setDelete={setDeletar} />
      </S.WrapperInfo>
    </S.Wrapper>
  );
};

export default Card;
