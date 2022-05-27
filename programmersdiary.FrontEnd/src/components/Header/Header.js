import React, { useContext, useEffect, useMemo, useState } from "react";
import { HeaderWrapper, Title, Save } from "./styles";
import { AiOutlineSave } from "react-icons/ai";
// import { ManipulateContext } from "../../context/ManipulaItem/ManipulateItem";
import prettier from "prettier";
import Error from "../Error/Error";
import crud from "../../utils/crud";
import { pluginsLista, possuiAtributos } from "../../utils/utils";
import { toast } from "react-toastify";
/*
  o header vai ser responsavel por salvar o conteudo que está no contexto manipulado.
*/
const Header = ({ itemManipulavel, setManipulavelItem, codigo }) => {
  const [error, setErrors] = useState({ err: false });
  const [teste, setTeste] = useState(false);
  const [code, setCode] = useState(codigo);

  useEffect(() => {
    let identificador;
    if (itemManipulavel.aberto === true && !error.err) {
      let funcaoTest = async () => {
        if (itemManipulavel.id) {
          itemManipulavel.codigo = codigo;
          crud.atualizar(itemManipulavel.id, itemManipulavel);
        } else {
          itemManipulavel.codigo = codigo;
          identificador = await crud.inserir(itemManipulavel);
        }

        toast.success("salvando", {
          autoClose: 200,
          theme: "dark",
          delay: 100,
        });

        /*
          Vai forçar a renderização de todos os componentes que usam esse contexto, assim corrigindo
          o problema do assincrono
        */
        setManipulavelItem({
          ...itemManipulavel,
          novo: false,
          salvo: true,
          id: identificador ? identificador : itemManipulavel.id,
          codigo: codigo,
        });

        console.log(itemManipulavel.codigo);
        console.log(codigo);
      };
      funcaoTest();
    }
  }, [teste]);

  // vai verificar se ha erro no codigo digitado
  useEffect(() => {
    if (codigo) {
      try {
        setCode(
          prettier.format(codigo, {
            parser: itemManipulavel.linguagem.nome,
            plugins: pluginsLista,
            jsxSingleQuote: true,
            bracketSameLine: true,
          })
        );
        setErrors({ err: false });
      } catch (err) {
        console.log(err);
        setErrors({ err: err });
      }
    }
  }, [codigo]);

  /*Alem de salvar, quando o card for alterado va devolver o codigo ja formatado para home*/
  function save() {
    // try {
    if (itemManipulavel.nome) {
      // gatilho para invocar o useEffect de cima(é ele quem salva no banco de dados)
      setTeste((value) => !value);
    } else {
      setErrors({ err: "Crie um card antes de começar a digitar" });
    }
  }
  console.log(itemManipulavel);

  return (
    <>
      <div>
        <HeaderWrapper>
          <Title>
            {error.err ? (
              <Error texto={error.err} />
            ) : itemManipulavel.linguagem ? (
              itemManipulavel.linguagem.labelLinguagem
            ) : null}
          </Title>
          <Save onClick={save}>
            <AiOutlineSave size="30px" />
          </Save>
        </HeaderWrapper>
      </div>
    </>
  );
};

export default React.memo(Header);
