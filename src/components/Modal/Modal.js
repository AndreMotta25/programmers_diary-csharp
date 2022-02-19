import React, { useContext, useEffect, useState } from "react";
import InputComponente from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Select from "../Select/";
import {
  Container,
  ShadowContainer,
  Form,
  Container1,
  Container2,
  ContainerMestre,
  Button,
} from "./styles";
import { AiOutlineCheck } from "react-icons/ai";
import { EditionContext } from "../../context/Edition/Edition";
import { CriationContext } from "../../context/Criation/Criation";
import prettier from "prettier";
import pluginsLista from "../../utils/plugins";
const Modal = ({ setModalActive }) => {
  const { editarItem, setEditar } = useContext(EditionContext);
  const { criationItem, setItemCriation } = useContext(CriationContext);
  const [nome, setNome] = useState(criationItem.nome ? criationItem.nome : "");
  const [desc, setDesc] = useState(
    criationItem.descricao ? criationItem.descricao : ""
  );
  const [id, setId] = useState(criationItem.id ? criationItem.id : "");
  const [language, setLanguage] = useState(
    criationItem.language ? criationItem.language : ""
  );
  const [code, setCode] = useState(criationItem.code ? criationItem.code : "");
  const [label, setLabel] = useState(
    criationItem.labelLanguage ? criationItem.labelLanguage : ""
  );
  // caso o container do modal seja clicado, o modal  fecha
  function handleClick(e) {
    console.log(e.currentTarget);
    console.log(e.target);
    if (e.currentTarget == e.target) {
      setModalActive(false);
      setItemCriation({});
    }
    // setModalActive(e.currentTarget !== e.target);
    // setEditar({});
  }
  // evento de submit
  function handleSubmit(e) {
    e.preventDefault();
    // caso nao exista
    if (!id) {
      setItemCriation({
        language: language,
        labelLanguage: label,
        name: nome,
        description: desc,
        code: "",
      });
      setModalActive(false);
    }
    // caso exista
    else {
      setItemCriation({
        id: id,
        language: language,
        labelLanguage: label,
        name: nome,
        description: desc,
        code: prettier.format(code, {
          parser: language,
          plugins: pluginsLista,
        }),
      });
      setModalActive(false);
    }
  }
  return (
    <>
      <ShadowContainer onClick={handleClick}>
        <Container className="modal">
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
                ></InputComponente>
                <TextArea
                  label="Descricao"
                  border="1px solid #ccc"
                  value={desc}
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                />
              </Container1>
              <Container2>
                <Select
                  label="Linguagens"
                  value={language}
                  onChange={(e) => {
                    setLanguage(e.target.value);
                    setLabel(e.target.selectedOptions[0].textContent);
                  }}
                ></Select>
              </Container2>
            </ContainerMestre>
            <Button>
              <AiOutlineCheck size={"20px"} color="#8333C8" />
            </Button>
          </Form>
        </Container>
      </ShadowContainer>
    </>
  );
};

export default Modal;

// posso retirar o contexto de editar, e usar so o de criar
