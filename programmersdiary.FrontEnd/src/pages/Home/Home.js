import React, { useState, useEffect } from "react";
import Menu from "../../components/Menu/Menu";
import Wrapper from "../../components/Wrapper/Wrapper";
import Card from "../../components/Card/Card";
import InputComponente from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import Select from "../../components/Select/";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import CodeMirror from "@uiw/react-codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import {
  codeLanguages,
  possuiAtributos,
  pluginsLista,
} from "../../utils/utils";
import crud from "../../utils/crud.js";
import CardSkeleton from "../../components/CardSkeleton/CardSkeleton";
import { AiOutlineCheck } from "react-icons/ai";
import prettier from "prettier";

import * as S from "./styles";
import ErroComun from "../../components/ErroComum/ErroComun";

const Home = () => {
  const [itemManipulavel, setManipulavelItem] = useState({});
  const [textCode, setTextCode] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [linguagens, setLinguagens] = useState([]);
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [found, setFound] = useState([]);
  const [result, setResult] = useState("");
  const [nome, setNome] = useState("");
  const [desc, setDesc] = useState("");
  const [id, setId] = useState("");
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");
  const [errors, setErros] = useState({});
  const [linguagemObj, setLinguagemObj] = useState({});
  const [limpar, setLimpar] = useState(false);
  const [newItem, setNewItem] = useState({});
  const [cardVelho, setCardVelho] = useState({});
  const [deletar, setDeletar] = useState({});
  const [erro, setErro] = useState("");

  function atualizarConteudoCard(indice) {
    cards[indice].id = itemManipulavel.id;
    cards[indice].codigo = itemManipulavel.codigo;
    setTextCode(itemManipulavel.codigo);
    setCards([...cards]);
    return;
  }

  useEffect(() => {
    if (itemManipulavel.codigo != textCode) {
      itemManipulavel.salvo = false;
    }
  }, [textCode]);

  // faz um fetch para pegar todas as linguagens do banco de
  useEffect(() => {
    async function getAll() {
      let listaLinguagens = await crud.getAll("linguagem");
      setLinguagens(listaLinguagens);
    }
    getAll();
  }, []);

  // caso um card já existente seja aberto, seu codigo irá para o container de texto
  useEffect(() => {
    if (itemManipulavel.id) setTextCode(itemManipulavel.codigo);
    else setTextCode("");
  }, [itemManipulavel]);

  // preenche o modal se for um card existente
  useEffect(() => {
    if (possuiAtributos(cardVelho) >= 3) {
      setNome(cardVelho.nome);
      setDesc(cardVelho.descricao);
      setId(cardVelho.id);
      setLanguage(cardVelho.linguagem.nome);
      setCode(cardVelho.codigo);
      setLinguagemObj(cardVelho.linguagem);
      setCardVelho({});
    }
  }, [cardVelho]);

  // limpa o modal quando for fechado
  useEffect(() => {
    setNome("");
    setDesc("");
    setId("");
    setLanguage("");
    setCode("");
    setLinguagemObj({});
    console.log("limpando");
  }, [limpar]);

  // adiciona o card novo a lista no menu
  useEffect(() => {
    if (itemManipulavel.novo === true) {
      setCards([...cards, newItem]);
    }
  }, [newItem]);

  // quando um card tiver seu nome alterado, vamos forcar a renderizacao para ser atualizado em tempo real
  useEffect(() => {
    let card = cards.find((card) => card.id === itemManipulavel.id);
    if (card && itemManipulavel.aberto) {
      card.nome = itemManipulavel.nome;
      card.descricao = itemManipulavel.descricao;
      card.linguagem = itemManipulavel.linguagem;
    }
    setCards([...cards]);
    // eslint-disable-next-line
  }, [nome, desc, language]);

  // sendo um card novo, vamos acha-lo na lista e vamos atribuir seu id  __OU__  Salva o conteudo de um card já existente  para assim permanecer "aberto"
  useEffect(() => {
    let cardIndice = cards.findIndex((card) => card.id === "");
    cardIndice =
      cardIndice >= 0
        ? cardIndice
        : cards.findIndex((card) => card.id === itemManipulavel.id);

    if (cardIndice >= 0 && itemManipulavel.salvo === true)
      atualizarConteudoCard(cardIndice);
  }, [itemManipulavel]);
  // // sendo um card novo, vamos acha-lo na lista e vamos atribuir seu id  para assim permanecer "aberto"
  // useEffect(() => {
  //   let cardIndice = cards.findIndex((card) => card.id === "");
  //   if (cardIndice >= 0 && itemManipulavel.salvo === true) {
  //     setTextCode(itemManipulavel.codigo);
  //     cards[cardIndice].id = itemManipulavel.id;
  //     setCards([...cards]);
  //     return;
  //   }
  // }, [itemManipulavel]);

  // // Salva o conteudo de um card já existente
  // useEffect(() => {
  //   let cardIndice = cards.findIndex((card) => card.id === itemManipulavel.id);
  //   if (cardIndice >= 0 && itemManipulavel.salvo === true) {
  //     setTextCode(itemManipulavel.codigo);
  //     cards[cardIndice].codigo = itemManipulavel.codigo;
  //     setCards([...cards]);
  //     return;
  //   }
  // }, [itemManipulavel]);

  useEffect(() => {
    if (deletar.decisao === true) {
      // caso o item a ser deletado seja o mesmo que está aberto, vamos limpar o container de texto
      if (deletar.id === itemManipulavel.id) {
        setTextCode("");
        setManipulavelItem({});
      } else crud.excluir(deletar.id);

      let cardsRestantes = cards.filter((card) => card.id !== deletar.id);
      setCards(cardsRestantes);
      setDeletar({});
    }
  }, [deletar]);

  function checkFields() {
    const error = {};

    if (!nome) error.nome = "Campo é obrigatorio";
    if (!language) error.language = "Campo é obrigatorio";
    if (!desc) error.desc = "Campo é obrigatorio";

    setErros(error);
    return error;
  }
  // evento de submit
  function handleSubmit(e) {
    e.preventDefault();
    const error = checkFields();
    if (possuiAtributos(error) == 0) {
      if (!id) {
        let obj = {
          id: id ? id : "",
          linguagem: linguagemObj,
          linguagemId: linguagemObj.id,
          nome: nome,
          descricao: desc,
          codigo: prettier.format(code, {
            parser: linguagemObj.nome,
            plugins: pluginsLista,
          }),
          aberto: true,
          novo: true,
          salvo: false,
        };

        if (itemManipulavel.aberto && !itemManipulavel.salvo)
          alert("Salve antes de iniciar outro card");
        else {
          setManipulavelItem(obj);
          setLimpar((v) => !v);
          setNewItem(obj);
        }
      } else {
        let obj = {
          aberto: true,
          novo: false,
          velho: true,
          salvo: true,
          descricao: desc,
          nome: nome,
          linguagem: linguagemObj,
          linguagemId: linguagemObj.id,
          codigo: code,
          id: id,
        };

        if (itemManipulavel.aberto && !itemManipulavel.salvo) {
          alert("Salve antes de iniciar outro card");
        } else {
          setManipulavelItem(obj);
          setLimpar((v) => !v);
        }
      }
      setModalActive(false);
    }
  }
  return (
    <>
      <Wrapper>
        <S.BlackWrapper>
          <Header
            itemManipulavel={itemManipulavel}
            setManipulavelItem={setManipulavelItem}
            codigo={textCode}
          ></Header>
          <CodeMirror
            value={textCode}
            height="64vh"
            width={"100%"}
            onChange={(value) => {
              setTextCode(value);
            }}
            extensions={[
              codeLanguages[
                itemManipulavel.labelLinguagem
                  ? itemManipulavel.labelLinguagem
                  : "js"
              ],
            ]}
            theme={oneDark}
          />
          <Modal setModalActive={setModalActive} modalActive={modalActive}>
            <S.Form onSubmit={handleSubmit}>
              <S.ContainerMestre>
                <S.Container1>
                  <InputComponente
                    label="Nome"
                    border="1px solid #ccc"
                    value={nome}
                    onChange={(e) => {
                      setNome(e.target.value);
                    }}
                    error={errors.nome}
                  ></InputComponente>
                  <TextArea
                    label="Descricao"
                    border="1px solid #ccc"
                    value={desc}
                    onChange={(e) => {
                      setDesc(e.target.value);
                    }}
                    error={errors.desc}
                  />
                </S.Container1>
                <S.Container2>
                  <Select
                    label="Linguagens"
                    value={language}
                    ListaLinguagens={linguagens}
                    onChange={(e) => {
                      setLanguage(e.target.value);
                      setLinguagemObj(
                        linguagens[e.target.selectedOptions[0].tabIndex]
                      );
                    }}
                    error={errors.language}
                  ></Select>
                </S.Container2>
              </S.ContainerMestre>
              <S.Button>
                <AiOutlineCheck size={"20px"} color="#8333C8" />
              </S.Button>
            </S.Form>
          </Modal>
        </S.BlackWrapper>
        <Menu
          setModalActive={setModalActive}
          setCards={setCards}
          cards={cards}
          search={search}
          setLoading={setLoading}
          setFound={setFound}
          setResult={setResult}
          setSearch={setSearch}
          setErro={setErro}
        >
          <S.WrapperCards>
            {!search &&
              !erro &&
              !loading &&
              cards.map((card) => (
                <Card
                  key={crypto.randomUUID()}
                  card={card}
                  setModalActive={setModalActive}
                  color={card.id === itemManipulavel.id ? "white" : "black"}
                  setCardVelho={setCardVelho}
                  setDeletar={setDeletar}
                />
              ))}
            {!search &&
              !erro &&
              cards.length <= 0 &&
              loading &&
              [1, 2, 3, 4].map(() => (
                <CardSkeleton key={crypto.randomUUID()} />
              ))}
            {(search &&
              !erro &&
              found.length > 0 &&
              found.map((card) => (
                <Card
                  key={crypto.randomUUID()}
                  card={card}
                  setModalActive={setModalActive}
                  color={card.id === itemManipulavel.id ? "white" : "black"}
                  setCardVelho={setCardVelho}
                  setDeletar={setDeletar}
                />
              ))) ||
              (found.length <= 0 && search && <S.Result>{result}</S.Result>)}
            {cards.length <= 0 && <ErroComun texto={erro} />}
          </S.WrapperCards>
        </Menu>
      </Wrapper>
    </>
  );
};

export default Home;
