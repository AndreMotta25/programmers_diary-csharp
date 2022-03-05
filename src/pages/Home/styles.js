import styled from "styled-components";

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
