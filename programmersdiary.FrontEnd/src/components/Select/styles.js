import styled from "styled-components";

export const ContainerSelect = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionSelect = styled.label`
  font-family: "Roboto Slab", serif;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
`;

export const List = styled.select`
  width: 100%;
  outline: none;
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 6px;
  font-family: "Roboto Slab", serif;
  font-size: 18px;
  margin-bottom: 5px;
`;
