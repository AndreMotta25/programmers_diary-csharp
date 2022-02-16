import React, { useState } from "react";
import InputComponente from "../Input/Input";
import { Container, Icone } from "./styles";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ ...otherProps }) => {
  return (
    <>
      <Container>
        <InputComponente {...otherProps} />
        <Icone>
          <BsSearch size={"20px"} />
        </Icone>
      </Container>
    </>
  );
};

export default SearchBar;
