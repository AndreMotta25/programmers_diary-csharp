import React, { useState, useContext, useEffect } from "react";
import Menu from "../../components/Menu/Menu";
import Wrapper from "../../components/Wrapper/Wrapper";
import { BlackWrapper } from "./styles";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import { CriationContext } from "../../context/Criation/Criation";
import CodeMirror from "@uiw/react-codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import codeLanguages from "../../utils/codeMirror";

const Home = () => {
  const { criationItem, setItemCriation } = useContext(CriationContext);
  const [itemCard, setItemCard] = useState({});
  const [textCode, setTextCode] = useState("");
  const [modalActive, setModalActive] = useState(false);

  // defini no cabecalho a linguagem
  useEffect(() => {
    setItemCard(criationItem);
  }, [criationItem]);

  // insere no contexto o codigo a cada digito
  useEffect(() => {
    setItemCriation({ ...criationItem, code: textCode });
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
          {modalActive && <Modal setModalActive={setModalActive}></Modal>}
        </BlackWrapper>
        <Menu setModalActive={setModalActive} cardAberto={itemCard}></Menu>
      </Wrapper>
    </>
  );
};

export default Home;
