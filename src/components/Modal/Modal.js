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
import { CriationContext } from "../../context/Criation/Criation";
import prettier from "prettier";
import pluginsLista from "../../utils/plugins";
import request from "../../utils/request";

const Modal = ({ setModalActive }) => {
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
    if (e.currentTarget == e.target) {
      setModalActive(false);
      setItemCriation({});
    }
  }
  // evento de submit
  function handleSubmit(e) {
    e.preventDefault();
    let obj = {
      id: id ? id : "",
      language: language,
      labelLanguage: label,
      nome: nome,
      descricao: desc,
      code: prettier.format(code, {
        parser: language,
        plugins: pluginsLista,
      }),
    };
    // caso nao exista
    if (!id) {
      setItemCriation(obj);
      setModalActive(false);
    }
    // caso exista
    else {
      request.atualizar(id, obj);
      setItemCriation(obj);
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
