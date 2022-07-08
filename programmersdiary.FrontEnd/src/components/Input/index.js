import { useRef, useState } from "react";
import Error from "../CommonError";
import * as S from "./styles";

const Input = ({
  label,
  width,
  widthInput = "95%",
  shadow,
  borderRadius,
  border = "none",
  borderContainer,
  fontSizeInput,
  fontSizeLabel,
  color,
  background = "white",
  valueControled,
  direction = "row",
  display = "flex",
  align = "center",
  gap,
  margin,
  minLength = 5,
  id,
  error,
  fontWeigth,
  ...otherProps
}) => {
  const container = useRef(null);

  return (
    <>
      <S.ContainerPrincipal width={width} margin={margin}>
        <S.Container
          ref={container}
          borderRadius={borderRadius}
          border={borderContainer}
          background={background}
          shadow={shadow}
          flexDirection={direction}
          display={display}
          align={align}
          gap={gap}
          onFocus={() => container.current.classList.add("ativo")}
          onBlur={() => container.current.classList.remove("ativo")}
        >
          <S.Input
            fontSize={fontSizeInput}
            borderRadius={borderRadius}
            background={background}
            minLength={minLength}
            widthInput={widthInput}
            id={id}
            border={border}
            {...otherProps}
          />
          <S.Label
            color={color}
            htmlFor={id}
            fontSizeLabel={fontSizeLabel}
            weigth={fontWeigth}
          >
            {label}
          </S.Label>
        </S.Container>
        {error && <Error error={error}></Error>}
      </S.ContainerPrincipal>
    </>
  );
};

export default Input;
