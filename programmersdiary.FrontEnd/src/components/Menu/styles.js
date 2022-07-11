import styled from "styled-components";

export const WrapperMenu = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 5%;
  align-items: center;
  overflow: auto;
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
    display: ${({ mobile }) => (mobile === true ? "flex" : "none")};
    position: absolute;
    background-image: linear-gradient(to right, #e981d9, #6d22c4 0%);
    width: 70%;
    box-shadow: 10px 0px 20px 0px rgba (0, 0, 0, 70%);
    height: 100%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
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
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 30%);
  transition: box-shadow 200ms, transform 200ms, background-color 200ms;
  &&:active {
    box-shadow: 0px 0px 0px;
    transform: translateX(4px), translateY(4px);
  }
  &:hover {
    background-color: #322929;
  }
`;
export const Button = styled(ButtonZoom)`
  width: 51%;
  height: 5%;
  min-height: 40px;
  background-color: #282828;
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
