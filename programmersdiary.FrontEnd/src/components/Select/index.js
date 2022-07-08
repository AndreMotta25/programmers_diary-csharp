import React from "react";
import Error from "../CommonError/index";
import * as S from "./styles";

function Select({
  label,
  options,
  error,
  value,
  ListaLinguagens,
  ...otherProps
}) {
  return (
    <S.ContainerSelect>
      <S.DescriptionSelect>{label}</S.DescriptionSelect>
      <S.List {...otherProps} value={value}>
        <option defaultValue>Escolha uma linguagem abaixo</option>
        {ListaLinguagens.map((option, indice) => (
          <option
            key={crypto.randomUUID()}
            value={option.nome}
            tabIndex={indice}
          >
            {option.labelLinguagem}
          </option>
        ))}
      </S.List>
      {error && <Error error={error}></Error>}
    </S.ContainerSelect>
  );
}

export default React.memo(Select);
