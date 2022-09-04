import React, { useState, useEffect, useContext } from "react";
import Menu from "../../components/Menu/Menu";
import Wrapper from "../../components/Wrapper/Wrapper";
import Card from "../../components/Card/Card";
import TextArea from "../../components/TextArea/TextArea";
import Select from "../../components/Select/";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import Input from "../../components/Input";
import Error from "../../components/CommonError";
import CardSkeleton from "../../components/CardSkeleton/CardSkeleton";

import CodeMirror from "@uiw/react-codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import jwt_decode from "jwt-decode";
import { AiOutlineCheck, AiFillGithub } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import * as utils from "../../utils/utils";
import api from "../../utils/cardRepository";
import prettier from "prettier";
import { UserContext } from "../../contexts/Auth";

const Home = ({ tokenExpired }) => {
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

  const { user } = useContext(UserContext);

  // const navigate = useNavigate();

  function atualizarConteudoCard(indice) {
    cards[indice].id = itemManipulavel.id;
    cards[indice].codigo = itemManipulavel.codigo;
    cards[indice].novo = false;
    setTextCode(itemManipulavel.codigo);
    setCards([...cards]);
    return;
  }

  // useEffect(() => {
  //   const token = localStorage.getItem("authToken");
  //   let timer;
  //   if (token && user?.email) {
  //     const timeToExpire = jwt_decode(token).exp * 1000;
  //     timer = setInterval(() => {
  //       if (Date.now() >= timeToExpire && user?.email) {
  //         tokenExpired(true);
  //         clearInterval(timer);
  //       }
  //       console.log(user);
  //       console.log("Contando...");
  //     }, 1000);
  //   }
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [user]);

  useEffect(() => {
    if (itemManipulavel.codigo != textCode) {
      itemManipulavel.salvo = false;
    }
  }, [textCode]);

  // faz um fetch para pegar todas as linguagens do banco
  useEffect(() => {
    async function getAll() {
      let listaLinguagens = await api.get("linguagem");
      setLinguagens(listaLinguagens.data);
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
    if (utils.possuiAtributos(cardVelho) >= 3) {
      setNome(cardVelho.nome);
      setDesc(cardVelho.descricao);
      setId(cardVelho.id);
      setLanguage(cardVelho.linguagem.nome);
      setCode(cardVelho.codigo);
      setLinguagemObj(cardVelho.linguagem);
      setCardVelho({});
      console.log(itemManipulavel);
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
  }, [limpar]);

  // adiciona o card novo a lista no menu
  useEffect(() => {
    if (itemManipulavel.novo === true) {
      setCards([newItem, ...cards]);
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
    console.log(itemManipulavel);
    let cardIndice = cards.findIndex((card) => card.id === "");
    cardIndice =
      cardIndice >= 0
        ? cardIndice
        : cards.findIndex((card) => card.id === itemManipulavel.id);

    if (cardIndice >= 0 && itemManipulavel.salvo === true)
      atualizarConteudoCard(cardIndice);
  }, [itemManipulavel]);

  useEffect(() => {
    if (deletar.decisao === true) {
      // caso o item a ser deletado seja o mesmo que está aberto, vamos limpar o container de texto
      if (deletar.id === itemManipulavel.id) {
        setTextCode("");
        setManipulavelItem({});
      } else api.delete(`card/${deletar.id}`);

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
    if (utils.possuiAtributos(error) == 0) {
      if (!id) {
        let obj = {
          id: id ? id : "",
          linguagem: linguagemObj,
          linguagemId: linguagemObj.id,
          nome: nome,
          descricao: desc,
          codigo: prettier.format(code, {
            parser: linguagemObj.nome,
            plugins: utils.pluginsLista,
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

  console.log(user);
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
            height="100%"
            width={"100%"}
            onChange={(value) => {
              setTextCode(value);
            }}
            extensions={[
              utils.codeLanguages[
                itemManipulavel.labelLinguagem
                  ? itemManipulavel.labelLinguagem
                  : "js"
              ],
            ]}
            theme={oneDark}
            placeholder="// Digite seu codigo aqui"
          />

          <Modal setModalActive={setModalActive} modalActive={modalActive}>
            <S.Form onSubmit={handleSubmit}>
              <S.ContainerMestre>
                <S.Container1>
                  <Input
                    label="Nome"
                    fontSizeLabel="16px"
                    fontWeigth="bold"
                    padding="10px"
                    border="1px solid #ccc"
                    align="flex-start"
                    widthInput="100%"
                    placeholder="Digite o nome do card"
                    value={nome}
                    borderRadius="5px"
                    gap="10px"
                    margin="0px 0px 10px 0px"
                    onChange={(e) => {
                      setNome(e.target.value);
                    }}
                    direction="column-reverse"
                    error={errors.nome}
                    id="cardNome"
                  />
                  <TextArea
                    label="Descricao"
                    border="1px solid #ccc"
                    value={desc}
                    placeholder="Insira aqui a descrição do seu card"
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
          <S.Footer>
            <S.Texto>
              <S.Link href="https://github.com/AndreMotta25" target="_blank">
                Diario do Programador Developed by André Motta
                <AiFillGithub size={25} />
              </S.Link>
            </S.Texto>
          </S.Footer>
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
          setId={setId}
        >
          <S.WrapperCards>
            {!search &&
              !erro &&
              !loading &&
              cards.map((card) => (
                <Card
                  key={card.id}
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
                  key={card.id}
                  card={card}
                  setModalActive={setModalActive}
                  color={card.id === itemManipulavel.id ? "white" : "black"}
                  setCardVelho={setCardVelho}
                  setDeletar={setDeletar}
                />
              ))) ||
              (found.length <= 0 && search && <S.Result>{result}</S.Result>)}
            {cards.length <= 0 && erro && <Error color="black" error={erro} />}
            {cards.length <= 0 && !erro && <p>Faça seu primeiro card</p>}
          </S.WrapperCards>
        </Menu>
      </Wrapper>
    </>
  );
};

export default Home;
