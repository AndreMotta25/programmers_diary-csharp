import React, { useEffect, useState } from "react";
import { WrapperMenu, Button, ButtonMenu, ButtonFecharMenu } from "./styles";
import crud from "../../utils/crud";
import SearchBar from "../SearchBar/SearchBar";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const Menu = ({
  setModalActive,
  setCards,
  cards,
  children,
  search,
  setLoading,
  setFound,
  setSearch,
  setResult,
}) => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  // busca os dados na api(talvez mudar para home)
  useEffect(() => {
    const fetchdata = async () => {
      const cards = await crud.getAll("card");
      setCards(cards);
      setLoading(false);
    };
    fetchdata();
  }, []);

  // faz a pesquisa
  useEffect(() => {
    let array_dados = [];
    const dados = cards.filter(
      (elem) =>
        elem.linguagem.labelLinguagem.includes(search) ||
        elem.nome.includes(search)
    );
    array_dados = [...dados];
    setFound(array_dados ? array_dados : []);
    if (array_dados.length <= 0) {
      setResult("Nada achado...");
    }
    // eslint-disable-next-line
  }, [search]);

  return (
    <>
      <ButtonMenu
        onClick={() => {
          setMenuAtivo(true);
        }}
      >
        <AiOutlineMenu size={"20px"} />
      </ButtonMenu>
      <WrapperMenu mobile={menuAtivo}>
        <ButtonFecharMenu
          onClick={() => {
            setMenuAtivo(false);
          }}
        >
          <AiOutlineMenu size={"20px"} />
        </ButtonFecharMenu>
        <SearchBar
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        {children}
        <Button
          onClick={() => {
            setModalActive((opt) => !opt);
          }}
        >
          <BsCodeSlash size={"25px"} color="#8333C8" />{" "}
        </Button>
      </WrapperMenu>
    </>
  );
};

export default React.memo(Menu);
