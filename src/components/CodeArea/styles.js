import styled from "styled-components";

export const BoardCode = styled.textarea`
  width: 100%;
  height: 90%;
  background-color: #282828;
  outline: none;
  border-radius: 5px;
  resize: none;
  padding: 10px;
  font-size: 16px;
  font-family: "Roboto Slab", serif;
  color: white;
  display: block;

  /* modify the scrollbar */
  &::-webkit-scrollbar {
    width: 7px;
    display: block;
  }
  &::-webkit-scrollbar-track {
    background-color: #282828;
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
