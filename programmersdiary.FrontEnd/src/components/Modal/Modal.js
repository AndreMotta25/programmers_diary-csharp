import React, {
  Children,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
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
  children,
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
  // useEffect(() => {
  //   if (possuiAtributos(itemManipulavel) >= 3) {
  //     setNome(itemManipulavel.nome);
  //     setDesc(itemManipulavel.descricao);
  //   }
  // }, [itemManipulavel]);

  return (
    <>
      {modalActive && (
        <ShadowContainer onClick={handleClick}>
          <Container className="modal">{children}</Container>
        </ShadowContainer>
      )}
    </>
  );
};

export default Modal;
