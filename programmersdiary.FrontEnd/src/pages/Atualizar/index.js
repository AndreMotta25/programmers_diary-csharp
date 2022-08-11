import PaginaGenerica from "../PaginaGenerica";
import Input from "../../components/Input";

import { AiFillGithub } from "react-icons/ai";
import api from "../../utils/cardRepository";

import { UserContext } from "../../contexts/Auth";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import setAuthorization from "../../utils/setAuthorization";

import * as S from "./styles";
import * as utils from "../../utils/utils";

const typeErrors = {
  username: {
    DuplicateUserName: "Usuario já em uso",
    InvalidUserName:
      "Usuario é inválido, pode conter apenas letras ou dígitos.",
    UserName: "O campo do usuario não pode estar vazio",
  },
  email: {
    DuplicateEmail: "Email já em uso",
    InvalidEmail: "Email invalido",
  },

  oldPassword: {
    PasswordMismatch: "Senha errada",
  },

  password: {
    PasswordRequiresUpper:
      "A Senha deve ter numero, um simbolo especial e uma letra maiuscula",
    PasswordRequiresLower:
      "A Senha deve ter numero, um simbolo especial e uma letra maiuscula",
    PasswordRequiresDigit:
      "A Senha deve ter numero, um simbolo especial e uma letra maiuscula",
    PasswordRequiresNonAlphanumeric:
      "A Senha deve ter numero, um simbolo especial e uma letra maiuscula",
    PasswordTooShort: "A senha deve conter ao menos 5 caracteres",
    Password: "A senha deve conter ao menos 5 caracteres",
  },
};

const Atualizar = () => {
  const { user } = useContext(UserContext);
  const [username, setUserName] = useState("livia");
  const [email, setEmail] = useState(user.email);
  const [samePassword, setSamePassWord] = useState("desenhos@");
  const [erros, setErros] = useState({});
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const form = useRef(null);

  useEffect(() => {
    const getDataUser = async () => {
      const data = await api.get("usuario/PegarUsername");
      setUserName(data.data);
    };
    getDataUser();
  }, []);

  const toCamelCase = (str) => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errosCadastrais = {};

    const validateFields = () => {
      const errors = utils.validateForm(form.current);
      errosCadastrais = { ...errors };
      setErros({ ...errors });
    };

    const atualizar = async () => {
      try {
        await api.put("usuario", {
          username: username,
          password: password,
          samePassword: samePassword,
          oldPassword: oldPassword,
        });
      } catch (e) {
        const backendErrors = e.response.data.errors;
        if (e.response.status === 400) {
          for (const error in backendErrors) {
            const errorType = Object.prototype.toString.call(
              backendErrors[error]
            );
            for (const errorIdentity in typeErrors) {
              if (
                typeErrors[errorIdentity].hasOwnProperty(error) &&
                errorType !== "[object Array]"
              )
                errosCadastrais[errorIdentity] =
                  typeErrors[errorIdentity][error];
              else if (errorType === "[object Array]")
                errosCadastrais[toCamelCase(error)] = backendErrors[error][0];
            }
          }
        }
        setErros({ ...errosCadastrais });
      }
    };

    validateFields();
    if (utils.possuiAtributos(errosCadastrais) <= 0) atualizar();
  };
  return (
    <PaginaGenerica title="Alterar Dados">
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
          disabled
        />
        <Input
          label="Senha Atual"
          direction="column-reverse"
          background=""
          align="flex-start"
          widthInput="100%"
          width={"100%"}
          gap={"5px"}
          padding="10px"
          borderRadius={"5px"}
          id="senha_atual"
          placeholder="Digite sua senha atual"
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          error={erros.oldPassword}
          name="oldPassword"
        />
        <Input
          label="Nova Senha"
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
          <S.ButtonSubmit>Salvar</S.ButtonSubmit>
          <S.ButtonSubmit
            type="button"
            onClick={() => {
              navigate("/home");
            }}
          >
            Voltar
          </S.ButtonSubmit>
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

export default Atualizar;
