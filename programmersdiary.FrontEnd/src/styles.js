import styled from "styled-components";

export const WrapperGlobal = styled.div`
  width: 100%;
  margin: auto auto;
  min-height: 100vh;
  display: flex;
  background-color: #28053f;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 20px 0; */
`;

export const ShadowContainer = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 60%);
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
`;
