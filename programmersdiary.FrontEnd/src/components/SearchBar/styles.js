import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 29px;
  /* width: 75%; */
  width: 80%;
  margin: 0 auto;
  z-index: 1000;
  @media screen and (max-width: 900px) {
    top: 0px;
  }
`;
export const Icone = styled.div`
  position: absolute;
  top: 8px;
  right: 5px;
`;
