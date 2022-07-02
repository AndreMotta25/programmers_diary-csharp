import React from "react";
import InputComponente from "../Input/Input";
import * as S from "./styles";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ ...otherProps }) => {
  return (
    <>
      <S.Container>
        <InputComponente
          style={{ boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)" }}
          {...otherProps}
        />
        <S.Icone>
          <BsSearch size={"20px"} />
        </S.Icone>
      </S.Container>
    </>
  );
};

export default SearchBar;
