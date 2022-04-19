import styled from "styled-components";

export const Text = styled.textarea`
  width: 100%;
  resize: none;
  height: 70%;
  display: block;
  outline: none;
  border: ${({ border }) => (border ? border : "none")};
  font-family: "Roboto Slab", serif;
  border-radius: 5px;
  padding-left: 5px;
  margin-bottom: 5px;
`;

export const Label = styled.label`
  font-family: "Roboto Slab", serif;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
`;
export const Container = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  height: 70%;
`;
export const Error = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: red;
`;
