import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import { AiOutlineSave, AiOutlineUser } from "react-icons/ai";
import { BsFileEarmarkCheck, BsFileEarmarkExcel } from "react-icons/bs";
import { BiErrorAlt } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { pluginsLista } from "../../utils/utils";
import { UserContext } from "../../contexts/Auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import prettier from "prettier";

import api from "../../utils/cardRepository";
import Toastfy from "../Toast";

/*
  o header vai ser responsavel por salvar o conteudo que está no contexto manipulado.
*/
const Header = ({ itemManipulavel, setManipulavelItem, codigo }) => {
  const [error, setErrors] = useState({ err: false });
  const [code, setCode] = useState(codigo);
  const { user, logout } = useContext(UserContext);
  const [invocaErro, setInvocaErro] = useState(false);
  const [saindo, setSaindo] = useState(false);
  const [contador, setContador] = useState(3);
  const navigate = useNavigate();

  // vai verificar se ha erro no codigo digitado
  useEffect(() => {
    if (codigo && itemManipulavel.aberto) {
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
      } catch (e) {
        console.log(e);
        setErrors({ err: e.message });
      }
    }
  }, [codigo]);

  function save() {
    const saveCard = async () => {
      let identificador;
      if (
        itemManipulavel.nome &&
        itemManipulavel.aberto === true &&
        !error.err
      ) {
        try {
          if (itemManipulavel.id) {
            itemManipulavel.codigo = codigo;
            await api.put(`card/${itemManipulavel.id}`, {
              ...itemManipulavel,
              usuarioId: user.id,
            });
          } else {
            itemManipulavel.codigo = codigo;
            identificador = await api.post("card", {
              ...itemManipulavel,
              usuarioId: user.id,
            });
          }

          toast.success("salvando", {
            autoClose: 200,
            theme: "dark",
            delay: 100,
          });

          setManipulavelItem({
            ...itemManipulavel,
            novo: false,
            salvo: true,
            id: identificador ? identificador.data : itemManipulavel.id,
            codigo: codigo,
          });
        } catch (e) {
          toast.error("Ocorreu um erro", {
            autoClose: 200,
            theme: "dark",
            delay: 100,
          });
        }
      } else {
        setErrors({ err: "Crie um card antes de começar a digitar" });
        setInvocaErro((value) => !value);
      }
    };
    saveCard();
  }

  // useEffect(() => {
  //   console.log("saindo");
  // }, [user]);

  // useEffect(() => {
  //   console.log("ssss");
  //   console.log(user);
  // });
  return (
    <>
      <div>
        <S.HeaderWrapper>
          <S.WrapperActions>
            <S.ActionUser>
              <AiOutlineUser size={32} color="#fff" />
              <S.WrapperDecision>
                <S.ListOfDecisions>
                  <S.DecisionsItem
                    onClick={() => {
                      logout();
                      setSaindo(true);
                      setInterval(() => {
                        setContador((value) => value - 1);
                      }, 1000);
                    }}
                  >
                    {!saindo && (
                      <>
                        Logout
                        <FiLogOut color="#fff" size={18} />
                      </>
                    )}
                    {saindo && <span>Saindo em {contador}</span>}
                  </S.DecisionsItem>
                  <S.DecisionsItem
                    onClick={() => {
                      navigate("/atualizar");
                    }}
                  >
                    Alterar Dados
                    <MdDriveFileRenameOutline color="#fff" size={18} />
                  </S.DecisionsItem>
                </S.ListOfDecisions>
              </S.WrapperDecision>
            </S.ActionUser>
            <S.Action onClick={() => setInvocaErro((value) => !value)}>
              {!error.err && <BsFileEarmarkCheck size={32} color="#fff" />}
              {error.err && (
                <div>
                  <BsFileEarmarkExcel size={32} color="#fff" />{" "}
                  {invocaErro && (
                    <Toastfy
                      text={error.err}
                      background="#fff"
                      icon={<BiErrorAlt size={"100%"} color="red" />}
                    />
                  )}
                </div>
              )}
            </S.Action>
            <S.Action onClick={save}>
              <AiOutlineSave size={32} color="#fff" />
            </S.Action>
          </S.WrapperActions>
        </S.HeaderWrapper>
      </div>
    </>
  );
};

export default Header;
