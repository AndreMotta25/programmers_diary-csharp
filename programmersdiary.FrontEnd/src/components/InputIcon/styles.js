import styled from "styled-components";

export const InputPublic = styled.input`
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  border-radius: ${({ borderRadius }) => borderRadius};
  outline: none;
  border: ${({ border }) => border};
  width: 90%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  align-items: center;
  background-color: ${({ background }) => background};
  border: ${({ border }) => border};
  width: 100%;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "5px")};
  box-shadow: ${({ shadow }) =>
    shadow ? shadow : "4px 4px 4px rgba(0,0,0,70%)"};
`;
export const Icon = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Input = styled(InputPublic)`
  border: none;
  width: 80%;
  background-color: ${({ background }) => background};
`;
export const Error = styled.div`
  font-size: 18px;
  color: #ff4500;
  font-weight: bold;
  align-self: flex-start;
`;
export const Teste = styled.div`
  width: ${({ width }) => width};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;
