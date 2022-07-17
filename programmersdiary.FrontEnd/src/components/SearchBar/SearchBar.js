import React from "react";
import Input from "../Input";
import * as S from "./styles";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ ...otherProps }) => {
  return (
    <>
      <S.Container>
        <Input
          width={"100%"}
          padding="10px"
          {...otherProps}
          label={<BsSearch size={"25px"} />}
          borderRadius="5px"
          id="seach"
          shadow="4px 4px 4px rgba(0,0,0,70%)"
          placeholder="Procure seu card"
        />
      </S.Container>
    </>
  );
};

export default SearchBar;
