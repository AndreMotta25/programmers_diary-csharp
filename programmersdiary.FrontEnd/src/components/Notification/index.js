import * as S from "./styles";
import Loading from "../Loading";
const Notification = ({ children }) => {
  return (
    <>
      <S.Container>
        <S.Texto>{children}.</S.Texto>
        <S.Texto>Você sera redirecionado automaticamente</S.Texto>
        <Loading></Loading>
      </S.Container>
    </>
  );
};
export default Notification;
