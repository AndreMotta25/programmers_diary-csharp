import styled from "styled-components";

export const Input = styled.input`
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  outline: none;
  border: ${({ border }) => (border ? border : "none")};
  font-family: "Roboto Slab", serif;
  position: relative;
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
  width: ${({ width }) => (width ? width : "100%")}; ;
`;

export const Error = styled.div`
  font-size: 18px;
  color: red;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  border-radius: 5px;
`;
