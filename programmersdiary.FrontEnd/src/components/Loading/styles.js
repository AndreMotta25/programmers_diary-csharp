import styled, { keyframes } from "styled-components";

const Teste = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;
export const Container = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  display: flex;
  gap: 20px;
  animation: ${Teste} 2s linear infinite;
`;
