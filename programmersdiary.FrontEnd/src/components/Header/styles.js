import styled, { keyframes } from "styled-components";
import { ButtonZoom } from "../../components/Menu/styles";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  flex-direction: row-reverse;
`;

export const Save = styled(ButtonZoom)`
  padding: 0px 30px;
  background-color: #a66aec;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #913eca;
    transition: all 0.5s ease;
    & svg {
      color: white !important;
      transition: all 0.5s ease;
    }
  }
`;
export const WrapperActions = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-end;
  width: 50%;
  gap: 10px;
`;

const AnimationButton = keyframes`
  from {
    background :transparent ;
  }
  to {
    background: linear-gradient(to right, #e981d9, #6d22c4);
    border: 0px;
  }
`;
export const Action = styled.button`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  &:hover {
    border-radius: 50%;
    animation: ${AnimationButton} 0.5s ease-in-out forwards;
  }
`;

export const ActionUser = styled(Action)`
  &:hover div {
    display: flex;
    visibility: visible;
    opacity: 1;
    transition: all 0.5s ease;
  }
`;
export const WrapperDecision = styled.div`
  position: absolute;
  width: 150px;
  padding: 5px;
  border-radius: 10px;
  background: linear-gradient(to right, #e981d9, #6d22c4);
  top: 50px;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  /* Faz o triangulo */
  &::before {
    width: 0;
    height: 0;
    content: "";
    display: block;
    position: absolute;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 9px solid #6d22c4;
    top: -8px;
    /* align-self: center; */
  }
`;
export const ListOfDecisions = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const DecisionsItem = styled.li`
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  background-color: #282828;
  color: #fff;
  font-family: "Roboto Slab", "Times New Roman", Times, serif;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
