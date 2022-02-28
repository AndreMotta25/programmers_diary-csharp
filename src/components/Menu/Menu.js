import React, { useEffect, useState, useContext } from "react";
import Card from "../Card/Card";
import { WrapperMenu, Result, WrapperCards, Button } from "./styles";
import crud from "../../utils/crud";
import SearchBar from "../SearchBar/SearchBar";
import { BsCodeSlash } from "react-icons/bs";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
import { CriationContext } from "../../context/Criation/Criation";

const Menu = ({ setModalActive, cardAberto }) => {
  const { criationItem, setItemCriation } = useContext(CriationContext);
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  const [found, setFound] = useState([]);
  const [result, setResult] = useState("");

  // busca os dados na api
  useEffect(() => {
    const fetchdata = async () => {
      const cards = await crud.getAll("http://localhost:3333/cards");
      setCards(cards);
      console.log(cards);
    };

    // isso é só para testes
    setTimeout(() => {
      fetchdata();
    }, 3000);
  }, []);

  // faz a pesquisa
  useEffect(() => {
    let array_dados = [];
    let array_filtrado = [];
    const dados = cards.filter((elem) => elem.labelLanguage === search);
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
  }, [search, cards]);

  // quando um card tiver seu nome alterado, vamos forcar a renderizacao para ser atualizado em tempo real
  useEffect(() => {
    let card = cards.find((card) => card.id === cardAberto.id);
    if (card) {
      card.nome = cardAberto.nome;
      card.descricao = cardAberto.descricao;
      card.language = cardAberto.language;
      card.labelLanguage = cardAberto.labelLanguage;
    }
    setCards([...cards]);
    // eslint-disable-next-line
  }, [cardAberto]);

  //coloca o novo item criado no fim da lista
  useEffect(() => {
    if (cardAberto.novo) {
      cardAberto.novo = false;
      setCards([...cards, cardAberto]);
    }
  }, [cardAberto.novo]);
  return (
    <>
      <WrapperMenu>
        <WrapperCards>
          <SearchBar
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          {!search &&
            cards.map((card) => (
              <Card
                key={crypto.randomUUID()}
                card={card}
                setModalActive={setModalActive}
                setCards={setCards}
                cards={cards}
              />
            ))}
          {!search &&
            cards.length <= 0 &&
            [1, 2, 3, 4].map((id) => (
              <CardSkeleton key={crypto.randomUUID()} />
            ))}
          {(search &&
            found.length > 0 &&
            found.map((card) => (
              <Card
                key={crypto.randomUUID()}
                card={card}
                setModalActive={setModalActive}
                setCards={setCards}
                cards={cards}
              />
            ))) ||
            (found.length <= 0 && search && <Result>{result}</Result>)}
        </WrapperCards>
        <Button
          onClick={() => {
            setModalActive((opt) => !opt);
          }}
        >
          <BsCodeSlash size={"39px"} color="#8333C8" />{" "}
        </Button>
      </WrapperMenu>
    </>
  );
};

export default Menu;
