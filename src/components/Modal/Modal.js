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
import { ManipulateContext } from "../../context/ManipulaItem/ManipulateItem";
import prettier from "prettier";
import { pluginsLista, possuiAtributos } from "../../utils/utils";

const Modal = ({ setModalActive, modalActive }) => {
  const { manipulableItem, addManipulableItem } = useContext(ManipulateContext);
  const [nome, setNome] = useState("");
  const [desc, setDesc] = useState("");
  const [id, setId] = useState("");
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");
  const [label, setLabel] = useState("");
  const [newItem, setNewItem] = useState({});
  const [oldItem, setOldItem] = useState({});
  const [errors, setErros] = useState({});

  // caso o container do modal seja clicado, o modal  fecha
  function handleClick(e) {
    if (e.currentTarget == e.target) {
      setModalActive(false);
      if (!manipulableItem.aberto) addManipulableItem({});
    }
  }

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
        obj.novo = true;
        setNewItem(obj);
        addManipulableItem(obj);
      }
      // caso exista
      else {
        obj.novo = false;
        setOldItem(obj);
        addManipulableItem(obj);
      }
      setModalActive(false);
    }
  }

  // faz um reset no modal quando for aberto
  useEffect(() => {
    setNome("");
    setDesc("");
    setId("");
    setLanguage("");
    setCode("");
    setLabel("");
  }, [modalActive]);

  // atribui valores ao modal
  useEffect(() => {
    if (possuiAtributos(manipulableItem) >= 1) {
      setNome(manipulableItem.nome);
      setDesc(manipulableItem.descricao);
      setId(manipulableItem.id);
      setLanguage(manipulableItem.language);
      setCode(manipulableItem.code);
      setLabel(manipulableItem.labelLanguage);
    }
    return () => {
      manipulableItem.aberto = false;
    };
  }, [manipulableItem]);

  // caso crie um novo item, o antigo sera "fechado"
  useEffect(() => {
    if (possuiAtributos(manipulableItem) >= 1) {
      newItem.aberto = true;
      oldItem.aberto = false;
    }
  }, [newItem]);

  // faz o inverso do efeito de cima"
  useEffect(() => {
    if (possuiAtributos(manipulableItem) >= 1) {
      newItem.aberto = false;
      oldItem.aberto = true;
    }
  }, [oldItem]);

  return (
    <>
      {modalActive && (
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
                    onChange={(e) => {
                      setLanguage(e.target.value);
                      setLabel(e.target.selectedOptions[0].textContent);
                    }}
                    error={errors.language}
                  ></Select>
                </Container2>
              </ContainerMestre>
              <Button>
                <AiOutlineCheck size={"20px"} color="#8333C8" />
              </Button>
            </Form>
          </Container>
        </ShadowContainer>
      )}
    </>
  );
};

export default Modal;
