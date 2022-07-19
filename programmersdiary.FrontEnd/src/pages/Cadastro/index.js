import Input from "../../components/Input";
import * as S from "./styles";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineCursorClick } from "react-icons/hi";
import { useContext, useState } from "react";
import userRepository from "../../utils/userRepository";
import * as utils from "../../utils/utils";
import useVerifyPassword from "../../hooks/useVerifyPassword";
import useValidacaoFront from "../../hooks/useValidacaoFront";
import PaginaGenerica from "../PaginaGenerica";
import { UserContext } from "../../contexts/Auth";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [samePassword, setSamePassWord] = useState("");
  const [erros, setErros] = useState({});
  const { password, setPassword, passwordIsValid } = useVerifyPassword("");
  const { sign } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let errosCadastrais = {};
    const campos = {
      username: username,
      email: email,
      password: password,
      samePassword: samePassword,
    };

    const cadastrar = async () => {
      try {
        await userRepository.post("Cadastrar", {
          username: username,
          email: email,
          password: password,
          samePassword: samePassword,
        });
        await sign(email, password);
        navigate("/home");
      } catch (e) {
        if (e.response.status === 400) {
          const erros = e.response.data.erros;
          for (const erro of erros) {
            if (
              erro.indexOf("Email") >= 0 &&
              erro.indexOf("is already taken.") >= 0
            )
              errosCadastrais["email"] = "Email já em uso";
            if (
              erro.indexOf("Username") >= 0 &&
              erro.indexOf("is already taken.") >= 0
            )
              errosCadastrais["username"] = "Usuario já em uso";
          }
        }
        console.log(errosCadastrais);
        setErros({ ...errosCadastrais });
        console.log(e);
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
      cadastrar();
    setErros(errosCadastrais);
  };

  return (
    <PaginaGenerica title="Cadastre-se">
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
