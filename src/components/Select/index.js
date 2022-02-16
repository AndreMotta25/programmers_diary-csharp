import React from "react";
import { ContainerSelect, DescriptionSelect, List } from "./styles";
import linguagens from "../../utils/linguagens";

function Select({ label, options, ...otherProps }) {
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
    </ContainerSelect>
  );
}

export default React.memo(Select);
