import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  position: relative;

  &:hover div {
    display: block;
    visibility: visible;
    opacity: 1;
    transition: all 0.5s ease;
  }
`;

export const ErroGerado = styled.p`
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
`;
export const ContainerErro = styled.div`
  position: absolute;
  min-width: 300px;
  max-width: 350px;
  background-color: white;
  border-radius: 10px;
  min-height: 200px;
  padding: 10px;
  top: 40px;
  left: -8px;
  opacity: 0;
  visibility: hidden;
  z-index: 9999;
  /* Faz o triangulo */
  &::before {
    width: 0;
    height: 0;
    content: "";
    display: block;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
    top: -9px;
    align-self: center;
  }
`;
