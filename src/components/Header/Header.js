import React, { useContext, useEffect, useState } from "react";
import { HeaderWrapper, Title, Save } from "./styles";
import { AiOutlineSave } from "react-icons/ai";
import { CriationContext } from "../../context/Criation/Criation";
import prettier from "prettier";
import pluginsLista from "../../utils/plugins";
import Error from "../Error/Error";
import request from "../../utils/crud";

const Header = ({ obj }) => {
  const { criationItem, setItemCriation } = useContext(CriationContext);
  const [error, setErrors] = useState({});

  /*Alem de salvar, quando o card for alterado va devolver o codigo ja formatado para home*/
  function save() {
    try {
      if (Object.getOwnPropertyNames(criationItem).length > 0) {
        const clearCode = prettier.format(criationItem.code, {
          parser: obj.language,
          plugins: pluginsLista,
          jsxSingleQuote: true,
          bracketSameLine: true,
        });
        // vai forcar a renderizacao da home
        obj.id ? request.atualizar(obj.id, obj) : request.inserir(obj);
        setItemCriation({ ...criationItem, code: clearCode });
        setErrors({ err: false });
      }
    } catch (err) {
      console.log(err);
      setErrors({ err: err });
    }
  }
  console.log(error);
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
