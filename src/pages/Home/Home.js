import React, { useState, useContext, useEffect } from "react";
import Menu from "../../components/Menu/Menu";
import Wrapper from "../../components/Wrapper/Wrapper";
import { BlackWrapper } from "./styles";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import { ManipulateContext } from "../../context/ManipulaItem/ManipulateItem";
import CodeMirror from "@uiw/react-codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import { codeLanguages } from "../../utils/utils";

const Home = () => {
  const { manipulableItem, addManipulableItem } = useContext(ManipulateContext);
  const [itemCard, setItemCard] = useState({});
  const [textCode, setTextCode] = useState("");
  const [modalActive, setModalActive] = useState(false);
  // defini no cabecalho a linguagem e monta o objeto card
  useEffect(() => {
    setItemCard(manipulableItem);
  }, [manipulableItem]);

  // insere no contexto o codigo digitado
  useEffect(() => {
    if (textCode) {
      addManipulableItem({ ...manipulableItem, code: textCode });
    }
  }, [textCode]);

  return (
    <>
      <Wrapper>
        <BlackWrapper>
          <Header obj={itemCard}></Header>
          <CodeMirror
            value={itemCard.code ? itemCard.code : ""}
            height="64vh"
            width={"100%"}
            onChange={(value, viewUpdate) => {
              console.log("value:", value);
              setTextCode(value);
            }}
            extensions={[
              codeLanguages[
                itemCard.labelLanguage ? itemCard.labelLanguage : "js"
              ],
            ]}
            theme={oneDark}
          />
          <Modal
            setModalActive={setModalActive}
            modalActive={modalActive}
          ></Modal>
        </BlackWrapper>
        <Menu setModalActive={setModalActive} openCard={itemCard}></Menu>
      </Wrapper>
    </>
  );
};

export default Home;
