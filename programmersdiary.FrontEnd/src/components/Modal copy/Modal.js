import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import InputComponente from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Select from "../Select";
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
import { NewItemContext } from "../../context/NewItem/NewItem";
import { OldItemContext } from "../../context/OldItem/OldItem";

import prettier from "prettier";
import { pluginsLista, possuiAtributos } from "../../utils/utils";

const Modal = ({
  setModalActive,
  modalActive,
  ListaLinguagens,
  setManipulavelItem,
  itemManipulavel,
}) => {
  // const { manipulableItem, addManipulableItem, allCards, addCards } =
  //   useContext(ManipulateContext);
  // const { addNewItem } = useContext(NewItemContext);
  // const { OldItem, addOldItem } = useContext(OldItemContext);
  const [nome, setNome] = useState("");
  const [desc, setDesc] = useState("");
  const [id, setId] = useState("");
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");
  const [label, setLabel] = useState("");
  const [errors, setErros] = useState({});
  const [objetoLinguagem, setObjetoLinguagem] = useState({});
  const [limpar, setLimpar] = useState(false);
  const [standBy, setStandBy] = useState({});
  const [teste, setTeste] = useState(false);
  console.log(itemManipulavel);
  // caso o container do modal seja clicado, o modal  fecha
  function handleClick(e) {
    if (e.currentTarget == e.target) {
      setModalActive(false);
      // if (!itemManipulavel.aberto) setManipulavelItem({});
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
      // caso nao exista
      if (!id) {
        let obj = {
          id: id ? id : "",
          linguagem: {
            id: objetoLinguagem.id,
            labelLinguagem: objetoLinguagem.labelLinguagem,
            nome: objetoLinguagem.nome,
          },
          linguagemId: objetoLinguagem.id,
          nome: nome,
          descricao: desc,
          codigo: prettier.format(code, {
            parser: objetoLinguagem.nome,
            plugins: pluginsLista,
          }),
          aberto: true,
          novo: true,
          salvo: false,
        };

        /*
          Quando um novo item for criado, utilizaremos o contexto de newItem, esse contexto vai forçar a renderização do menu,
          pq menu está á utiliza-lo.

        */
        setObjetoLinguagem({});
        if (possuiAtributos(itemManipulavel) <= 2)
          // addNewItem(obj);
          console.log("novo item");
        else if (
          possuiAtributos(itemManipulavel) >= 3 &&
          !itemManipulavel.salvo
        )
          alert("Salve antes de iniciar outro card");
        else {
          // addNewItem(obj);
        }
      }
      // caso exista
      else {
        let obj = {
          aberto: true,
          novo: false,
          velho: true,
          salvo: true,
          descricao: desc,
          nome: nome,
          linguagem:
            possuiAtributos(objetoLinguagem) > 2
              ? objetoLinguagem
              : OldItem.linguagem,
          linguagemId:
            possuiAtributos(objetoLinguagem) > 2
              ? objetoLinguagem.id
              : OldItem.linguagem.id,
          codigo: OldItem.codigo,
          id: id,
        };
        if (possuiAtributos(itemManipulavel) <= 2) {
          // addOldItem(obj);
        } else if (
          possuiAtributos(itemManipulavel) >= 3 &&
          !itemManipulavel.salvo
        ) {
          alert("Salve antes de iniciar outro card");
        } else {
          // addOldItem(obj);
        }
      }
      setModalActive(false);
      setLimpar((v) => !v);
    }
  }

  /*
    Quando abrimos um card já existente, será esse effect que pegará suas informaçoes e colocará no modal,
    assim o preeenchendo
  */
  // useLayoutEffect(() => {
  //   console.log(OldItem);
  //   if (possuiAtributos(OldItem) >= 3) {
  //     console.log(OldItem);
  //     setNome(OldItem.nome);
  //     setDesc(OldItem.descricao);
  //     setId(OldItem.id);
  //     setLanguage(OldItem.linguagem.nome);
  //     setCode(OldItem.codigo);
  //     setLabel(OldItem.linguagem);
  //   }
  // }, [OldItem]);

  // faz um reset no modal quando for fechado
  // useEffect(() => {
  //   setNome("");
  //   setDesc("");
  //   setId("");
  //   setLanguage("");
  //   setCode("");
  //   setLabel("");
  //   // addOldItem({});
  // }, []);
  useEffect(() => {
    if (possuiAtributos(itemManipulavel) >= 3) {
      setNome(itemManipulavel.nome);
      setDesc(itemManipulavel.descricao);
    }
  }, [itemManipulavel]);

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
                    ListaLinguagens={ListaLinguagens}
                    onChange={(e) => {
                      setLanguage(e.target.value);
                      setObjetoLinguagem(
                        ListaLinguagens[e.target.selectedOptions[0].tabIndex]
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
          </Container>
        </ShadowContainer>
      )}
    </>
  );
};

export default Modal;
