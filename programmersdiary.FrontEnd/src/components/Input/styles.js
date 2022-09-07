import styled from "styled-components";

export const General = styled.input`
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  border-radius: ${({ borderRadius }) => borderRadius};
  outline: none;
  border: ${({ border }) => border};
  width: 90%;
`;

export const ContainerPrincipal = styled.div`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: ${({ margin }) => margin};
`;

export const Container = styled.div`
  display: ${({ display }) => display};
  justify-content: space-around;
  position: relative;
  align-items: ${({ align }) => align};
  background-color: ${({ background }) => background};
  flex-direction: ${({ flexDirection }) => flexDirection};
  border: ${({ border }) => border};
  width: ${({ width }) => width};
  border-radius: ${({ borderRadius }) => borderRadius};
  box-shadow: ${({ shadow }) => shadow};
  gap: ${({ gap }) => gap};
  padding-right: 5px;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  color: ${({ color }) => color};
  justify-content: center;
  font-size: ${({ fontSizeLabel }) => fontSizeLabel};
  font-weight: ${({ weigth }) => weigth};
  font-family: "Roboto Slab", serif;
`;
export const Input = styled(General)`
  border: ${({ border }) => border};
  width: ${({ widthInput }) => widthInput};
  background-color: ${({ background }) => background};
`;
