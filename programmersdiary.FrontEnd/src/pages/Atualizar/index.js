import PaginaGenerica from "../PaginaGenerica";
import Input from "../../components/Input";
import * as S from "./styles";
import { AiFillGithub } from "react-icons/ai";
import { useState } from "react";
import userRepository from "../../utils/userRepository";
import * as utils from "../../utils/utils";
import useVerifyPassword from "../../hooks/useVerifyPassword";
import useValidacaoFront from "../../hooks/useValidacaoFront";
import { UserContext } from "../../contexts/Auth";
import { useContext } from "react";

const Atualizar = () => {
  const { user } = useContext(UserContext);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState(user.email);
  const [samePassword, setSamePassWord] = useState("");
  const [erros, setErros] = useState({});
  const { password, setPassword, passwordIsValid } = useVerifyPassword("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let errosCadastrais = {};
    const campos = {
      username: username,
      email: email,
      password: password,
      samePassword: samePassword,
    };
    const atualizar = async () => {
      try {
        await userRepository.put("Atualizar", {
          username: username,
          password: password,
          samePassword: samePassword,
        });
      } catch (e) {
        if (e.response.status === 400) {
          const erros = e.response.data.erros;
          for (const erro of erros) {
            if (
              erro.indexOf("Username") >= 0 &&
              erro.indexOf("is already taken.") >= 0
            )
              errosCadastrais["username"] = "Usuario já em uso";
          }
        }
        setErros({ ...errosCadastrais });
      }
    };
    const resultadoValidacao = useValidacaoFront(
      username,
      email,
      password,
      samePassword,
      passwordIsValid,
      campos
    );

    errosCadastrais = { ...resultadoValidacao };

    if (
      username &&
      email &&
      password &&
      samePassword &&
      utils.possuiAtributos(errosCadastrais) <= 0
    )
      atualizar();

    setErros(errosCadastrais);
  };
  return (
    <PaginaGenerica title="Alterar Dados">
      <S.Form onSubmit={handleSubmit}>
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
        />
        <S.WrapperActions>
          <S.ButtonSubmit>Salvar</S.ButtonSubmit>
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
