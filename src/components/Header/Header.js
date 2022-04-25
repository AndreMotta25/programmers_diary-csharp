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

  /*Alem de salvar, quando o card for alterado va devolver o codigo ja formatado para home*/
  function save() {
    try {
      if (possuiAtributos(manipulableItem) > 0) {
        const clearCode = prettier.format(manipulableItem.code, {
          parser: obj.language,
          plugins: pluginsLista,
          jsxSingleQuote: true,
          bracketSameLine: true,
        });
        // vai forcar a renderizacao da home
        obj.id ? crud.atualizar(obj.id, obj) : crud.inserir(obj);
        obj.id = obj.id ? obj.id : allCards[allCards.length - 2].id + 1;
        addManipulableItem({
          ...manipulableItem,
          code: clearCode,
        });
        allCards[allCards.length - 1].id = obj.id;
        addCards(allCards);
        setErrors({ err: false });
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
