import styled from "styled-components";
import foto from "../../assets/fundo.png";
import { WrapperDefault } from "../../components/Wrapper/styles";

export const Wrapper = styled(WrapperDefault)``;

export const WrapperImage = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-image: url(${foto});
  width: 50%;
  border-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const WrapperTitle = styled.div`
  width: 80%;
  background-image: linear-gradient(to right, #e981d9, #6d22c4);
  height: 68px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 2.3rem;
  font-weight: 600;
  font-family: "Roboto slab";

  @media screen and (max-width: 1300px) {
    font-size: 1.8rem;
  }
`;
export const Form = styled.form`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;
  width: 50%;
`;

const General = styled.button`
  background-color: #282828;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  border: none;
  padding: 10px 20px;
  font-size: 0.9rem;
  color: white;
  font-family: "Roboto Slab";
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 70%);
`;

export const Logar = styled(General)``;
export const Cadastrar = styled(General)``;
