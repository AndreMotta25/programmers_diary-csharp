import * as S from "./styles";

const Input = ({
  icon,
  width,
  shadow,
  borderRadius,
  border = "none",
  fontSize = "16px",
  color,
  borderContainer = "none",
  background = "white",
  id,
  error,
  ...otherProps
}) => {
  return (
    <>
      <S.Teste width={width}>
        <S.Container
          borderRadius={borderRadius}
          border={borderContainer}
          background={background}
          shadow={shadow}
        >
          <S.Input
            fontSize={fontSize}
            borderRadius={borderRadius}
            background={background}
            id={id}
            minLength={5}
            {...otherProps}
          ></S.Input>
          <S.Icon htmlFor={id}>{icon}</S.Icon>
        </S.Container>
        {error && <S.Error>{error}</S.Error>}
      </S.Teste>
    </>
  );
};

export default Input;
