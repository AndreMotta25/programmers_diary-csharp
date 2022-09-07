import * as S from "./styles";

const PaginaGenerica = ({ title, children }) => {
  return (
    <S.ContainerEspacado>
      <S.Container>
        <header>
          <S.Title>{title}</S.Title>
        </header>
        {children}
      </S.Container>
    </S.ContainerEspacado>
  );
};
export default PaginaGenerica;
