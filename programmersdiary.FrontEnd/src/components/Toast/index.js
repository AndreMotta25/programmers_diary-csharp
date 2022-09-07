import * as S from "./styles";
import { useRef, useState } from "react";

const Toast = ({ text, textColor, icon, background, shadow }) => {
  const wrapper = useRef(null);
  const handleRemove = () => {
    // limparErro();
    wrapper.current.remove();
  };
  return (
    <>
      <div>
        <S.Wrapper
          ref={wrapper}
          background={background}
          shadow={shadow}
          onClick={handleRemove}
        >
          <S.Icon>{icon}</S.Icon>
          <S.Text textColor={textColor}>{text}</S.Text>
        </S.Wrapper>
      </div>
    </>
  );
};
export default Toast;
