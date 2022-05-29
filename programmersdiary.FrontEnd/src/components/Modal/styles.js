import styled from "styled-components";

export const ShadowContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 70%);
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;
export const Container = styled.div`
  width: 60%;
  height: 68%;
  background-color: white;
  border-radius: 5px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
