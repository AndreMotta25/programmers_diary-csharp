import React, { useState, useContext, useEffect, useMemo } from "react";
import Menu from "../../components/Menu/Menu";
import Wrapper from "../../components/Wrapper/Wrapper";
import Card from "../../components/Card/Card";
import InputComponente from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import Select from "../../components/Select/";
import {
  BlackWrapper,
  WrapperMenu,
  Result,
  WrapperCards,
  Button,
  ButtonMenu,
  ButtonFecharMenu,
  Container,
  ShadowContainer,
  Form,
  Container1,
  Container2,
  ContainerMestre,
  Button2,
} from "./styles";
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
import Menu2 from "../../components/Menu2/Menu2";
import CardSkeleton from "../../components/CardSkeleton/CardSkeleton";
import { AiOutlineCheck } from "react-icons/ai";
import prettier from "prettier";
const Home = () => {
  const [itemManipulavel, setManipulavelItem] = useState({});
  const [itemCard, setItemCard] = useState({});
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
  const [label, setLabel] = useState("");
  const [errors, setErros] = useState({});
  const [linguagemObj, setLinguagemObj] = useState({});
  const [limpar, setLimpar] = useState(false);

  const [cardVelho, setCardVelho] = useState({});

  // defini no cabecalho a linguagem e monta o objeto card
  useEffect(() => {
    setItemCard(itemManipulavel);
  }, [itemManipulavel]);

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
    }
  }, [cardVelho]);

  // limpa o modal quando for fechado
  useEffect(() => {
    setNome("");
    setDesc("");
    setId("");
    setLanguage("");
    setCode("");
    setLabel("");
  }, [limpar]);

  // quando um card tiver seu nome alterado, vamos forcar a renderizacao para ser atualizado em tempo real
  useEffect(() => {
    let card = cards.find((card) => card.id === itemManipulavel.id);
    if (card && !card.novo) {
      card.nome = itemManipulavel.nome;
      card.descricao = itemManipulavel.descricao;
      card.linguagem = itemManipulavel.linguagem;
    }
    setCards([...cards]);
    // eslint-disable-next-line
  }, [nome, desc, language]);

  // adiciona o card novo a lista no menu
  useEffect(() => {
    if (itemManipulavel.novo === true) {
      setCards([...cards, itemManipulavel]);
    }
  }, [itemManipulavel]);

  // sendo um card novo, vamos acha-lo na lista e vamos atribuir seu id  para assim permanecer "aberto"
  useEffect(() => {
    let cardIndice = cards.findIndex((card) => card.id === "");
    if (cardIndice >= 0 && itemManipulavel.salvo === true) {
      setTextCode(itemManipulavel.codigo);
      cards[cardIndice].id = itemManipulavel.id;
      setCards([...cards]);
    }
  }, [itemManipulavel]);

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
          setLinguagemObj({});
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
          codigo: cardVelho.codigo,
          id: cardVelho.id,
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
        <BlackWrapper>
          <Header
            itemManipulavel={itemManipulavel}
            setManipulavelItem={setManipulavelItem}
            codigo={textCode}
          ></Header>
          <CodeMirror
            value={textCode}
            height="64vh"
            width={"100%"}
            onChange={(value, viewUpdate) => {
              setTextCode(value);
            }}
            extensions={[
              codeLanguages[
                itemCard.labelLinguagem ? itemCard.labelLinguagem : "js"
              ],
            ]}
            theme={oneDark}
          />
          <Modal
            setModalActive={setModalActive}
            modalActive={modalActive}
            ListaLinguagens={linguagens}
            setManipulavelItem={setManipulavelItem}
            itemManipulavel={itemManipulavel}
          >
            <Form onSubmit={handleSubmit}>
              <ContainerMestre>
                <Container1>
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
                </Container1>
                <Container2>
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
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setLimpar((v) => !v);
                    }}
                  >
                    teste
                  </button>
                </Container2>
              </ContainerMestre>
              <Button>
                <AiOutlineCheck size={"20px"} color="#8333C8" />
              </Button>
            </Form>
          </Modal>
        </BlackWrapper>
        <Menu2
          setModalActive={setModalActive}
          setCards={setCards}
          cards={cards}
          setManipulavelItem={setManipulavelItem}
          itemManipulavel={itemManipulavel}
          search={search}
          setLoading={setLoading}
          setFound={setFound}
          setResult={setResult}
          setSearch={setSearch}
        >
          <WrapperCards>
            {!search &&
              !loading &&
              cards.map((card) => (
                <Card
                  key={crypto.randomUUID()}
                  card={card}
                  setModalActive={setModalActive}
                  color={card.id === itemManipulavel.id ? "white" : "black"}
                  itemManipulavel={itemManipulavel}
                  setManipulavelItem={setManipulavelItem}
                  setCardVelho={setCardVelho}
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
        </Menu2>
      </Wrapper>
    </>
  );
};

export default Home;

/* 
        <Menu
          setModalActive={setModalActive}
          openCard={itemCard}
          salvo={itemManipulavel.salvo == true ? itemManipulavel : {}}
          setManipulavelItem={setManipulavelItem}
          itemManipulavel={itemManipulavel}
          setTextCode={setTextCode}
          setCards={setCards}
          cards={cards}
        ></Menu> 
        */
