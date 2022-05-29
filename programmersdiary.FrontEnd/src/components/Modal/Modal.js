import React from "react";

import { Container, ShadowContainer } from "./styles";

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
        <ShadowContainer onClick={handleClick}>
          <Container className="modal">{children}</Container>
        </ShadowContainer>
      )}
    </>
  );
};

export default Modal;
