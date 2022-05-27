import styled from "styled-components";

export const WrapperMenu = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 5%;

  @media screen and (max-width: 900px) {
    display: ${({ mobile }) => (mobile === true ? "block" : "none")};
    position: absolute;
    background-image: linear-gradient(to right, #e981d9, #6d22c4 0%);
    width: 70%;
    box-shadow: 10px 0px 20px rgba(0, 0, 0, 70%);
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const WrapperCards = styled.div`
  width: 100%;
  padding: 30px 38px;
  overflow: auto;
  height: 83.5%;

  &::-webkit-scrollbar {
    width: 7px;
    display: block;
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
  @media screen and (max-width: 900px) {
    height: 80%;
  }
`;
export const Result = styled.span`
  font-weight: bold;
  font-family: "Roboto Slab", serif;
  font-size: 18px;
`;

export const ButtonZoom = styled.button`
  cursor: pointer;
  outline: none;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: none;
  &:hover {
    background-color: #322929;
    transition: all 0.5s ease;
    & svg {
      transform: scale(1.2);
      transition: all 0.5s ease;
      color: white !important;
    }
  }
`;
export const Button = styled(ButtonZoom)`
  width: 51%;
  height: 5%;
  min-height: 40px;
  background-color: #282828;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 30%);
  margin: 0 auto;
  align-self: center;
`;

export const ButtonMenu = styled(ButtonZoom)`
  min-width: 10%;
  background-color: #a66aec;
  margin: 0 auto;
  display: none;
  &:hover {
    background-color: #913eca;
  }
  @media screen and (max-width: 900px) {
    display: flex;
    position: absolute;
    top: 30px;
    left: 30px;
    height: 33px;
  }
`;

export const ButtonFecharMenu = styled(Button)`
  margin-top: 10px;
  width: 20%;
  display: none;
  margin-right: 43px;
  margin-bottom: 10px;
  color: white;
  @media screen and (max-width: 900px) {
    display: flex;
  }
`;
