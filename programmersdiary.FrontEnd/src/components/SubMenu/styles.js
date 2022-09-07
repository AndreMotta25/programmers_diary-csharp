import styled from "styled-components";

export const WrapperSubMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover ul {
    display: flex;
  }
`;
export const List = styled.ul`
  background-color: white;
  max-width: 100px;
  display: none;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  bottom: -42.5px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 30%);
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

export const ListItem = styled.li`
  padding: 0;
  font-weight: 500;
  letter-spacing: 1px;
  font-family: "Roboto Slab", serif;
  cursor: pointer;
  width: 100%;
  text-align: center;
  border-radius: 5px;

  &:hover {
    background-color: #282828;
    color: white;
  }
`;
export const DotsMenu = styled.img`
  display: block;
  cursor: pointer;
`;
export const WrapperDots = styled.div`
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-weight: 500;
  letter-spacing: 1px;
  font-family: "Roboto Slab", serif;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  &:hover {
    background-color: #282828;
    color: white;
    border-radius: 5px;
  }
`;
