import React from "react";
import Error from "../CommonError";
import * as S from "./styles";

const TextArea = ({ label, width, error, ...otherProps }) => {
  return (
    <>
      <S.Container width={width}>
        {label && <S.Label>{label}</S.Label>}
        <S.Text {...otherProps}></S.Text>
        {error && <Error error={error} />}
      </S.Container>
    </>
  );
};

export default TextArea;
