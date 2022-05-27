import React, { useEffect, useState } from "react";
import { ContainerSelect, DescriptionSelect, List, Error } from "./styles";
// import { linguagens } from "../../utils/utils";

function Select({
  label,
  options,
  error,
  value,
  ListaLinguagens,
  ...otherProps
}) {
  return (
    <ContainerSelect>
      <DescriptionSelect>{label}</DescriptionSelect>
      <List {...otherProps} value={value}>
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
      </List>
      <Error>{error}</Error>
    </ContainerSelect>
  );
}

export default React.memo(Select);
