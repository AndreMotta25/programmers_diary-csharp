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
    let array_filtrado = [];
    const dados = cards.filter(
      (elem) => elem.linguagem.labelLinguagem === search
    );
    const dados2 = cards.filter((elem) => elem.nome === search);
    const dados3 = cards.filter((elem) => elem.nome.indexOf(search) !== -1);
    array_dados = [...dados, ...dados2, ...dados3];
    // filtra os dados
    if (array_dados.length > 0) {
      array_dados.forEach((elem) => {
        if (array_filtrado.filter((item) => item.id === elem.id).length <= 0) {
          array_filtrado.push(elem);
        }
      });
      setFound(array_filtrado);
    }
    setFound(array_filtrado ? array_filtrado : []);
    if (array_filtrado.length <= 0) {
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
