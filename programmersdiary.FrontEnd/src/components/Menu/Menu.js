import React, { useEffect, useState } from "react";
import * as S from "./styles";
import SearchBar from "../SearchBar/SearchBar";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import api from "../../utils/cardRepository";

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
  setErro,
  setId,
}) => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cards = await api.get("/card/");
        setCards(cards.data);
      } catch (e) {
        if (!e.response.status === 401 || !e.response.status === 404)
          setErro("Ocorreu um erro");
      }
      setLoading(false);
    };

    fetchData();
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
  }, [search,cards]);
  console.log(cards);

  return (
    <>
      <S.ButtonMenu
        onClick={() => {
          setMenuAtivo(true);
        }}
      >
        <AiOutlineMenu size={"20px"} />
      </S.ButtonMenu>
      <S.WrapperMenu mobile={menuAtivo}>
        <S.ButtonFecharMenu
          onClick={() => {
            setMenuAtivo(false);
          }}
        >
          <AiOutlineMenu size={"20px"} />
        </S.ButtonFecharMenu>
        <SearchBar
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        {children}
        <S.Button
          onClick={() => {
            setModalActive((opt) => !opt);
            // setLimpar((opt) => !opt);
            setId("");
          }}
        >
          <BsCodeSlash size={"25px"} color="#8333C8" />{" "}
        </S.Button>
      </S.WrapperMenu>
    </>
  );
};

export default Menu;
