import React from "react";
import { VscError } from "react-icons/vsc";
import * as S from "./styles";

const Error = ({ texto }) => {
  return (
    <>
      <S.Container>
        {/* <VscError size={"25px"} color="red" /> */}
        <S.ContainerErro>
          <S.ErroGerado>{String(texto)}</S.ErroGerado>
        </S.ContainerErro>
      </S.Container>
    </>
  );
};

export default React.memo(Error);
