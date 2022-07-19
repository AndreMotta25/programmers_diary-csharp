import styled from "styled-components";
import foto from "../../assets/fundo2.png";
import { WrapperDefault } from "../../components/Wrapper/styles";

export const Wrapper = styled(WrapperDefault)`
  min-width: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-image: url(${foto});
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 50%);
    position: absolute;
    z-index: 1;
  }
`;
export const WrapperWithColor = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  background-image: linear-gradient(to right, #e981d9, #6d22c4);
  border-radius: 10px;
  /* padding: 7% 0; */
  position: relative;
  z-index: 2;
  max-height: 600px;
  height: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 664px) {
    width: 90%;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  @media screen and (min-width: 1440px) {
    width: 100%;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  color: #fff;
  font-size: 1.2em;
  max-width: 245px;
  text-align: center;
  font-family: "Roboto Slab", serif;
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
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
  width: 100%;
`;

export const Logar = styled(General)``;
export const Span = styled.span`
  display: block;
  font-size: 17px;
  cursor: pointer;
  text-decoration: solid red;
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  gap: 10px;
`;
