import React from "react";

import { Input, Label, Container, Error } from "./styles";

const InputComponente = ({ label, width, error, ...otherProps }) => {
  return (
    <>
      <Container width={width}>
        {label && <Label>{label}</Label>}
        <Input type="text" {...otherProps}></Input>
        <Error>{error}</Error>
      </Container>
    </>
  );
};

export default InputComponente;
