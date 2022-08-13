import { AiFillGithub } from "react-icons/ai";
import { HiOutlineCursorClick } from "react-icons/hi";
import { useContext, useState, useRef } from "react";
import { UserContext } from "../../contexts/Auth";
import { useNavigate } from "react-router-dom";

import api from "../../utils/cardRepository";

import * as utils from "../../utils/utils";
import * as S from "./styles";

import PaginaGenerica from "../PaginaGenerica";
import Input from "../../components/Input";

const Cadastro = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [samePassword, setSamePassWord] = useState("");
  const [erros, setErros] = useState({});
  const [password, setPassword] = useState("");

  const { sign } = useContext(UserContext);
  const navigate = useNavigate();
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    let errosCadastrais = {};

    const validateFields = () => {
      const errors = utils.validateForm(form.current);
      errosCadastrais = { ...errors };
      setErros({ ...errors });
    };

    const cadastrar = async () => {
      try {
        await api.post("Usuario/Cadastrar", {
          username: username,
          email: email,
          password: password,
          samePassword: samePassword,
        });
        await sign(email, password);
        navigate("/home");
      } catch (e) {
        const backendErrors = e.response.data.errors;
        const errorsIdentity = utils.typeErrorsIdentity;

        if (e.response.status === 400) {
          for (const error in backendErrors) {
            const errorType = Object.prototype.toString.call(
              backendErrors[error]
            );
            for (const errorIdentity in errorsIdentity) {
              if (
                errorsIdentity[errorIdentity].hasOwnProperty(error) &&
                errorType !== "[object Array]"
              )
                errosCadastrais[errorIdentity] =
                  errorsIdentity[errorIdentity][error];
              else if (errorType === "[object Array]")
                errosCadastrais[utils.toCamelCase(error)] =
                  backendErrors[error][0];
            }
          }
        }
        setErros({ ...errosCadastrais });
      }
    };
    validateFields();
    if (utils.possuiAtributos(errosCadastrais) <= 0) cadastrar();
  };

  return (
    <PaginaGenerica title="Cadastre-se">
      <S.Form ref={form} onSubmit={handleSubmit}>
        <Input
          label="Username"
          width={"100%"}
          direction="column-reverse"
          background=""
          align="flex-start"
          widthInput="100%"
          gap={"5px"}
          padding="10px"
          borderRadius={"5px"}
          id="nomeUsuario"
          placeholder="Digite o seu nome de usuario"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          error={erros.username}
          name="username"
        />
        <Input
          label="Email"
          direction="column-reverse"
          background=""
          align="flex-start"
          widthInput="100%"
          width={"100%"}
          gap={"5px"}
          padding="10px"
          borderRadius={"5px"}
          id="emailUsuario"
          placeholder="Digite o seu email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={erros.email}
          name="email"
        />

        <Input
          label="Senha"
          direction="column-reverse"
          background=""
          align="flex-start"
          widthInput="100%"
          width={"100%"}
          gap={"5px"}
          padding="10px"
          borderRadius={"5px"}
          id="senha"
          placeholder="Digite sua senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={erros.password}
          name="password"
        />
        <Input
          label="Repita a Senha"
          direction="column-reverse"
          background=""
          align="flex-start"
          widthInput="100%"
          width={"100%"}
          gap={"5px"}
          padding="10px"
          borderRadius={"5px"}
          id="sameSenha"
          placeholder="Repita sua senha"
          type="password"
          value={samePassword}
          onChange={(e) => setSamePassWord(e.target.value)}
          error={erros.samePassword}
          name="samePassword"
        />
        <S.WrapperActions>
          <S.ButtonSubmit>Se cadastrar</S.ButtonSubmit>
          <S.LinkLogin href="/">
            Ou faça login <HiOutlineCursorClick size={25} color={"#fff"} />
          </S.LinkLogin>
        </S.WrapperActions>
      </S.Form>
      <S.Footer>
        <S.Texto>
          <S.LinkGitHub href="https://github.com/AndreMotta25" target="_blank">
            Diario do Programador Developed by André Motta
            <AiFillGithub size={25} />
          </S.LinkGitHub>
        </S.Texto>
      </S.Footer>
    </PaginaGenerica>
  );
};

export default Cadastro;
