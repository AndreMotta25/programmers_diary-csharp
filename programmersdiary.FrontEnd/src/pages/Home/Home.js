import React, { useState, useContext, useEffect, useMemo } from "react";
import Menu from "../../components/Menu/Menu";
import Wrapper from "../../components/Wrapper/Wrapper";
import { BlackWrapper } from "./styles";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import CodeMirror from "@uiw/react-codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import { codeLanguages, possuiAtributos } from "../../utils/utils";
import crud from "../../utils/crud.js";

const Home = () => {
  const [itemManipulavel, setManipulavelItem] = useState({});
  const [itemCard, setItemCard] = useState({});
  const [textCode, setTextCode] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [linguagens, setLinguagens] = useState([]);
  console.log(itemManipulavel.codigo);
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
    if (itemCard.id) setTextCode(itemCard.codigo);
    else setTextCode("");
  }, [itemCard]);

  return useMemo(() => (
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
          ></Modal>
        </BlackWrapper>
        <Menu
          setModalActive={setModalActive}
          openCard={itemCard}
          salvo={itemManipulavel.salvo == true ? itemManipulavel : {}}
          setManipulavelItem={setManipulavelItem}
          itemManipulavel={itemManipulavel}
          setTextCode={setTextCode}
        ></Menu>
      </Wrapper>
    </>
  ));
};

export default Home;
