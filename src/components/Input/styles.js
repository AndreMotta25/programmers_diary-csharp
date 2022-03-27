import styled from "styled-components";

export const Input = styled.input`
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  outline: none;
  border: ${({ border }) => (border ? border : "none")};
  margin-bottom: 35px;
  font-family: "Roboto Slab", serif;
`;
export const Label = styled.label`
  font-family: "Roboto Slab", serif;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
`;
export const Container = styled.div`
  width: ${({ width }) => (width ? width : "100%")}; ;
`;

export const Error = styled.div`
  font-size: 18px;
  color: red;
  font-weight: bold;
`;
