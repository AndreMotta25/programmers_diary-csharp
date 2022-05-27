import React from "react";
import { ContainerSelect, DescriptionSelect, List, Error } from "./styles";
import { linguagens } from "../../utils/utils";

function Select({ label, options, error, ...otherProps }) {
  return (
    <ContainerSelect>
      <DescriptionSelect>{label}</DescriptionSelect>
      <List {...otherProps}>
        <option defaultValue>Escolha uma linguagem abaixo</option>
        {linguagens.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </List>
      <Error>{error}</Error>
    </ContainerSelect>
  );
}

export default React.memo(Select);
