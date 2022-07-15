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
}) => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  // busca os dados na api(talvez mudar para home)
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const cards = await api.get("", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCards(cards.data);
        setLoading(false);
      } catch (e) {
        setErro("Ocorreu um erro inesperado!");
      }
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
          }}
        >
          <BsCodeSlash size={"25px"} color="#8333C8" />{" "}
        </S.Button>
      </S.WrapperMenu>
    </>
  );
};

export default Menu;
