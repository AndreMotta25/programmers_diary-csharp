import * as S from "./styles";
import { AiOutlineLoading } from "react-icons/ai";
const Loading = ({ spinnerColor }) => {
  return (
    <>
      <S.Container>
        <AiOutlineLoading size={"100%"} color={spinnerColor}></AiOutlineLoading>
      </S.Container>
    </>
  );
};
export default Loading;
