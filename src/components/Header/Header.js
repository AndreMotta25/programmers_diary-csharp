import React, { useContext, useEffect, useState } from "react";
import { HeaderWrapper, Title, Save } from "./styles";
import { AiOutlineSave } from "react-icons/ai";
import { ManipulateContext } from "../../context/ManipulaItem/ManipulateItem";
import prettier from "prettier";
import pluginsLista from "../../utils/plugins";
import Error from "../Error/Error";
import crud from "../../utils/crud";

const Header = ({ obj }) => {
  const { manipulableItem, addManipulableItem, allCards } =
    useContext(ManipulateContext);
  const [error, setErrors] = useState({});

  /*Alem de salvar, quando o card for alterado va devolver o codigo ja formatado para home*/
  function save() {
    try {
      if (Object.getOwnPropertyNames(manipulableItem).length > 0) {
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
