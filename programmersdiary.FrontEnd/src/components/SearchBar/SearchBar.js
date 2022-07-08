import React from "react";
import Input from "../InputIcon";
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
          icon={<BsSearch size={"20px"} />}
        />
      </S.Container>
    </>
  );
};

export default SearchBar;
