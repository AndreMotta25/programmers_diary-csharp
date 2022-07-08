import styled from "styled-components";

export const ContainerErro = styled.div`
  margin-left: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const Erro = styled.span`
  display: block;
  font-size: 14px;
  color: ${({ color }) => color};
  line-height: 1;
  font-weight: bold;
`;
