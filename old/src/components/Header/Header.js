import React, { useContext, useState } from "react";
import { HeaderWrapper, Title, Save } from "./styles";
import { AiOutlineSave } from "react-icons/ai";
import { ManipulateContext } from "../../context/ManipulaItem/ManipulateItem";
import prettier from "prettier";
import Error from "../Error/Error";
import crud from "../../utils/crud";
import { pluginsLista, possuiAtributos } from "../../utils/utils";

const Header = ({ obj }) => {
  const { manipulableItem, addManipulableItem, allCards, addCards } =
    useContext(ManipulateContext);
  const [error, setErrors] = useState({});

  // caso o card seja novo vai atribuir um id, caso já existe vai atualiza-lo no banco
  function atribuirIdCardOrUpdate(obj) {
    obj.id ? crud.atualizar(obj.id, obj) : crud.inserir(obj); // caso ja tenha um id
    console.log(obj);
    if (obj.novo) {
      // aqui vamos estar "adivinhado" um id pro card
      allCards[allCards.length - 1].id = allCards[allCards.length - 2].id + 1;
      obj.id = allCards[allCards.length - 2].id + 1;
      obj.novo = false;
      crud.atualizar(obj.id, obj);
    }
  }
  /*Alem de salvar, quando o card for alterado va devolver o codigo ja formatado para home*/
  function save() {
    try {
      if (manipulableItem.nome) {
        const clearCode = prettier.format(manipulableItem.code, {
          parser: obj.language,
          plugins: pluginsLista,
          jsxSingleQuote: true,
          bracketSameLine: true,
        });
        atribuirIdCardOrUpdate(obj);
        addManipulableItem({ ...manipulableItem, code: clearCode });
        let card = allCards.findIndex((card) => card.id === obj.id);
        allCards[card] = manipulableItem;
        addCards(allCards);
        setErrors({ err: false });
      } else {
        setErrors({ err: "Crie um card antes de começar a digitar" });
      }
    } catch (err) {
      setErrors({ err: err });
    }
  }
  return (
    <>
      <HeaderWrapper>
        <Title>
          {error.err ? <Error texto={error.err} /> : obj.labelLanguage}
        </Title>
        <Save onClick={save}>
          <AiOutlineSave size="30px" />
        </Save>
      </HeaderWrapper>
    </>
  );
};

export default Header;
