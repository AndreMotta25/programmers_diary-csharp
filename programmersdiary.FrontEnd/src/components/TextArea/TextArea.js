import React from "react";
import * as S from "./styles";

const TextArea = ({ label, width, error, ...otherProps }) => {
  return (
    <>
      <S.Container width={width}>
        {label && <S.Label>{label}</S.Label>}
        <S.Text {...otherProps}></S.Text>
        <S.Error>{error}</S.Error>
      </S.Container>
    </>
  );
};

export default TextArea;
