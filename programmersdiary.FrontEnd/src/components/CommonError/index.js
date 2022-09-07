import { BiErrorAlt } from "react-icons/bi";
import * as S from "./styles";

const Error = ({ error, color = "red" }) => {
  return (
    <S.ContainerErro className="erro">
      <BiErrorAlt color="red" size={25}></BiErrorAlt>
      <S.Erro color={color}>{error}</S.Erro>
    </S.ContainerErro>
  );
};
export default Error;
