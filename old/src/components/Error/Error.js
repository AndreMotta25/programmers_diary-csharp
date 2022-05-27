import React from "react";
import { VscError } from "react-icons/vsc";
import { Container, ErroGerado, ContainerErro } from "./styles";

const Error = ({ texto }) => {
  return (
    <>
      <Container>
        <VscError size={"25px"} color="red" />
        <ContainerErro>
          <ErroGerado>{String(texto)}</ErroGerado>
        </ContainerErro>
      </Container>
    </>
  );
};

export default Error;
