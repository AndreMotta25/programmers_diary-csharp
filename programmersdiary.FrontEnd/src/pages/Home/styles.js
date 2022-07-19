import styled, { keyframes } from "styled-components";
import { ButtonZoom } from "../../components/Menu/styles";

export const BlackWrapper = styled.div`
  background-color: #282828;
  width: 100%;
  height: 100%;
  border-top-left-radius: 9px;
  border-bottom-left-radius: 9px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media screen and (min-width: 901px) and (max-width: 1100px) {
    width: 80%;
  }

  & *::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    display: block;
  }
  & *::-webkit-scrollbar-track {
    background-color: #282828;
  }
  & *::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 5px;
    cursor: pointer;
    display: block;
  }
  & *::-webkit-scrollbar-thumb:hover {
    background-color: violet;
  }
`;

export const WrapperCards = styled.div`
  width: 100%;
  padding: 30px 38px;
  overflow: auto;
  flex: 0 0 70%;
  /* display: flex; */
  /* flex-direction: column-reverse; */
  /* scroll-behavior: auto; */
  /* align-items: flex-start; */

  @media screen and (max-width: 900px) {
    flex: 0 0 45%;
  }
  &::-webkit-scrollbar {
    width: 7px;
    display: block;
    /* top: 0; */
    /* position: relative; */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 5px;
    cursor: pointer;
    display: block;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: violet;
  }
`;
export const Result = styled.span`
  font-weight: bold;
  font-family: "Roboto Slab", serif;
  font-size: 18px;
`;
export const Button = styled(ButtonZoom)`
  width: 51%;
  height: 5%;
  min-height: 40px;
  background-color: #282828;
  margin: 0 auto;
  align-self: center;
`;

// formulario
export const Form = styled.form`
  height: 93%;
`;
export const Container1 = styled.div`
  width: 50%;
  margin-bottom: 20px;
`;
export const Container2 = styled.div`
  width: 50%;
`;
export const ContainerMestre = styled.div`
  height: 100%;
  display: flex;
  gap: 40px;
  width: 100%;
`;
export const Footer = styled.footer`
  width: 100%;
  /* background-color: aqua; */
  text-align: center;
`;
export const Texto = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  margin-top: 20px;
  padding: 5px;
`;
export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
