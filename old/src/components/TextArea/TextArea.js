import React from "react";
import { Text, Container, Label, Error } from "./styles";

const TextArea = ({ label, width, error, ...otherProps }) => {
  return (
    <>
      <Container width={width}>
        {label && <Label>{label}</Label>}
        <Text {...otherProps}></Text>
        <Error>{error}</Error>
      </Container>
    </>
  );
};

export default TextArea;
