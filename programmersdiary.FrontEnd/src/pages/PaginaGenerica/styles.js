import styled from "styled-components";
import { WrapperDefault } from "../../components/Wrapper/styles";

export const Container = styled(WrapperDefault)`
  width: 50%;
  height: 80%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  gap: 10px;
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const ContainerEspacado = styled.div`
  width: 100%;
  padding: 20px 0;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  text-align: center;

  @media screen and (max-width: 700px) {
    font-size: 30px;
  }
`;
