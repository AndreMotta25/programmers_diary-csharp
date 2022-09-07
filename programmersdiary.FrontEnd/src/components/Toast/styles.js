import styled, { keyframes } from "styled-components";

export const SlowMotion = keyframes`
    from {
        top: 10px;
        opacity: 0;
        right: -200px;
    }
    to {
        opacity: 1;
        right: 10px;
        top: 10px;
    }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 300px;
  background-color: ${({ background }) => background};
  display: flex;
  border-radius: 5px;
  padding: ${({ padding }) => (padding ? padding : "10px")};
  position: fixed;

  align-items: center;
  box-shadow: ${({ shadow }) => shadow};
  gap: 10px;
  cursor: pointer;
  animation: ${SlowMotion} 0.5s ease-in forwards;
`;

export const Icon = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.code`
  margin: 0;
  color: ${({ textColor }) => textColor};
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
`;
