import React from "react";
import * as S from "./styles";

const Modal = ({ setModalActive, modalActive, children }) => {
  // caso o container do modal seja clicado, o modal  fecha
  function handleClick(e) {
    if (e.currentTarget == e.target) {
      setModalActive(false);
    }
  }

  return (
    <>
      {modalActive && (
        <S.ShadowContainer onClick={handleClick}>
          <S.Container className="modal">{children}</S.Container>
        </S.ShadowContainer>
      )}
    </>
  );
};

export default Modal;
