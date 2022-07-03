import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { AiOutlineSave } from "react-icons/ai";
import prettier from "prettier";
import Error from "../Error/Error";
import { pluginsLista } from "../../utils/utils";
import { toast } from "react-toastify";
import api from "../../utils/cardRepository";
/*
  o header vai ser responsavel por salvar o conteudo que está no contexto manipulado.
*/
const Header = ({ itemManipulavel, setManipulavelItem, codigo }) => {
  const [error, setErrors] = useState({ err: false });
  const [salvar, setSalvar] = useState(false);
  const [code, setCode] = useState(codigo);

  useEffect(() => {
    let identificador;
    if (itemManipulavel.aberto === true && !error.err) {
      let salvar = async () => {
        try {
          if (itemManipulavel.id) {
            itemManipulavel.codigo = codigo;
            await api.put(`${itemManipulavel.id}`, itemManipulavel);
          } else {
            itemManipulavel.codigo = codigo;
            identificador = await api.post("", itemManipulavel);
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
        } catch (e) {
          toast.error("Ocorreu um erro", {
            autoClose: 200,
            theme: "dark",
            delay: 100,
          });
        }
      };
      salvar();
    }
  }, [salvar]);

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

  // VOU TER QUE ALTERAR ISSO DEPOIS, NÃO FAZ O MINIMO SENTIDO SER ASSIM
  /*Alem de salvar, quando o card for alterado va devolver o codigo ja formatado para home*/
  function save() {
    // try {
    if (itemManipulavel.nome) {
      // gatilho para invocar o useEffect de cima(é ele quem salva no banco de dados)
      setSalvar((value) => !value);
    } else {
      setErrors({ err: "Crie um card antes de começar a digitar" });
    }
  }

  return (
    <>
      <div>
        <S.HeaderWrapper>
          <S.Title>
            {error.err ? (
              <Error texto={error.err} />
            ) : itemManipulavel.linguagem ? (
              itemManipulavel.linguagem.labelLinguagem
            ) : null}
          </S.Title>
          <S.Save onClick={save}>
            <AiOutlineSave size="30px" />
          </S.Save>
        </S.HeaderWrapper>
      </div>
    </>
  );
};

export default React.memo(Header);
