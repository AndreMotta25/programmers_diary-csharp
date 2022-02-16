import styled from "styled-components";

export const WrapperMenu = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 17px;
  /* align-items: center; */
  /* justify-content: center; */
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
  &::-webkit-scrollbar-track {
    /* background-color: #282828; */
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

export const Button = styled.button`
  width: 51%;
  background-color: #282828;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 30%);
  border-radius: 5px;
  border: none;
  margin: 0 auto;
  cursor: pointer;
  outline: none;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #322929;
    transition: all 0.5s ease;
    & svg {
      color: white !important;
      transition: all 0.5s ease;
    }
  }
`;
