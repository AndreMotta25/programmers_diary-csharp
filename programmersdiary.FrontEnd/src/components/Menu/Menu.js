import React, { useEffect, useState, useContext, useMemo } from "react";
import Card from "../Card/Card";
import {
  WrapperMenu,
  Result,
  WrapperCards,
  Button,
  ButtonMenu,
  ButtonFecharMenu,
} from "./styles";
import crud from "../../utils/crud";
import SearchBar from "../SearchBar/SearchBar";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
import { ManipulateContext } from "../../context/ManipulaItem/ManipulateItem";
import { NewItemContext } from "../../context/NewItem/NewItem";
import { OldItemContext } from "../../context/OldItem/OldItem";
import { possuiAtributos } from "../../utils/utils";

const Menu = ({
  setModalActive,
  openCard,
  salvo,
  setManipulavelItem,
  itemManipulavel,
  setTextCode,
}) => {
  // const { manipulableItem, addManipulableItem, allCards, addCards } =
  //   useContext(ManipulateContext);
  const { newItem } = useContext(NewItemContext);
  const { OldItem } = useContext(OldItemContext);
  const [search, setSearch] = useState("");
  const [found, setFound] = useState([]);
  const [result, setResult] = useState("");
  const [menuAtivo, setMenuAtivo] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [deleteItem, setDelete] = useState({});

  // busca os dados na api
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
  }, [search]);

  // quando um card tiver seu nome alterado, vamos forcar a renderizacao para ser atualizado em tempo real
  useEffect(() => {
    let card = cards.find((card) => card.id === openCard.id);
    if (card && !card.novo) {
      card.nome = openCard.nome;
      card.descricao = openCard.descricao;
      card.linguagem = openCard.linguagem;
    }
    setCards([...cards]);
    // eslint-disable-next-line
  }, [openCard]);

  // adiciona o card novo a lista no menu
  useEffect(() => {
    if (newItem.novo === true) {
      /*
        Como o novo card já foi criado, agr vamos atribui-lo ao contexto de manipulavel para podermos utiliza-lo
      */
      setCards([...cards, newItem]);
      setManipulavelItem(newItem);
    }
  }, [newItem]);

  useEffect(() => {
    if (OldItem.novo === false) setManipulavelItem(OldItem);
  }, [OldItem]);

  // sendo um card novo, vamos acha-lo na lista e vamos atribuir seu id  para assim permanecer "aberto"
  useEffect(() => {
    let cardIndice = cards.findIndex((card) => card.id === "");
    if (cardIndice >= 0 && salvo.salvo === true) {
      setTextCode(salvo.codigo);
      cards[cardIndice].id = salvo.id;
      setCards([...cards]);
    }
  }, [salvo]);

  useEffect(() => {
    console.log("asdasdasd");
    let cardIndice = cards.findIndex((card) => card.id === itemManipulavel.id);
    console.log(cardIndice);
    if (cardIndice >= 0 && salvo.salvo === true) {
      setTextCode(salvo.codigo);
      cards[cardIndice].codigo = salvo.codigo;
      cards[cardIndice].id = salvo.id;
      setCards([...cards]);
    }
  }, [salvo]);

  // exclui um card
  useEffect(() => {
    let excluir = () => {
      crud.excluir(deleteItem.id);
      let cardsRestantes = cards.filter((card) => card.id !== deleteItem.id);
      setCards(cardsRestantes);
    };
    if (possuiAtributos(deleteItem) > 0) excluir();
  }, [deleteItem]);

  console.log(cards);

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
        <WrapperCards>
          {!search &&
            !loading &&
            cards.map((card) => (
              <Card
                key={crypto.randomUUID()}
                card={card}
                setModalActive={setModalActive}
                color={card.id === itemManipulavel.id ? "white" : "black"}
                setDelete={setDelete}
                itemManipulavel={itemManipulavel}
              />
            ))}
          {!search &&
            cards.length <= 0 &&
            loading &&
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
              />
            ))) ||
            (found.length <= 0 && search && <Result>{result}</Result>)}
        </WrapperCards>
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
