import React from "react";
import { Text, Container, Label } from "./styles";

const TextArea = ({ label, width, ...otherProps }) => {
  return (
    <>
      <Container width={width}>
        {label && <Label>{label}</Label>}
        <Text {...otherProps}></Text>
      </Container>
    </>
  );
};

export default TextArea;
