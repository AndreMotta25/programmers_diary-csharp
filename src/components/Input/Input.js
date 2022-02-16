import React from "react";

import { Input, Label, Container } from "./styles";

const InputComponente = ({ label, width, ...otherProps }) => {
  return (
    <>
      <Container width={width}>
        {label && <Label>{label}</Label>}
        <Input type="text" {...otherProps}></Input>
      </Container>
    </>
  );
};

export default InputComponente;
