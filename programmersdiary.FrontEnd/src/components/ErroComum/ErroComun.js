import React from "react";
import { VscError } from "react-icons/vsc";
import * as S from "./styles";

const ErroComun = ({ texto }) => {
  return (
    <>
      <S.Container>
        <VscError size={"25px"} color="red" />
        <S.Erro>{texto}</S.Erro>
      </S.Container>
    </>
  );
};

export default React.memo(ErroComun);
