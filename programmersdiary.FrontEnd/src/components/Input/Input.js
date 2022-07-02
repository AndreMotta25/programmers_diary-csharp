import React from "react";
import * as S from "./styles";

const InputComponente = ({ label, width, error, ...otherProps }) => {
  return (
    <>
      <S.Container width={width}>
        {label && <S.Label>{label}</S.Label>}
        <S.Input type="text" {...otherProps}></S.Input>
        <S.Error>{error}</S.Error>
      </S.Container>
    </>
  );
};

export default InputComponente;
