import React from "react";
import InputComponente from "../Input/Input";
import { Container, Icone } from "./styles";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ ...otherProps }) => {
  return (
    <>
      <Container>
        <InputComponente
          style={{ boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)" }}
          {...otherProps}
        />
        <Icone>
          <BsSearch size={"20px"} />
        </Icone>
      </Container>
    </>
  );
};

export default SearchBar;
