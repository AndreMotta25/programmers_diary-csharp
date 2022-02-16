import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const Title = styled.h1`
  font-size: 18px;
  font-family: "Roboto Slab", serif;
  font-weight: 600;
  color: #46fc42;
  letter-spacing: 1px;
`;
export const Save = styled.button`
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
