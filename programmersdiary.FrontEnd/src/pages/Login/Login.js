import Input from "../../components/InputIcon";

import * as S from "./styles";
import logo from "../../assets/logo.png";
import { AiOutlineMail } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { useState } from "react";
import userRepository from "../../utils/userRepository";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [identificacao, setidentificacao] = useState("");
  const [password, setPassword] = useState("");
  const [erros, setErros] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensagem = "Campo invalido";
    let erros = {};

    const logar = async (identificacao, password) => {
      try {
        const resultado = await userRepository.post("login", {
          identificacao: identificacao,
          password: password,
        });
        localStorage.setItem(
          "usuario",
          JSON.stringify({
            token: resultado.data.token,
            email: resultado.data.email,
            id: resultado.data.id,
          })
        );
        toast.success("Entrando", {
          autoClose: 200,
          theme: "dark",
          delay: 100,
        });
        navigate("/home");
      } catch (e) {
        erros = {
          ...erros,
          identificacao: "Usuario ou Senha estão incorretos",
        };
        console.log(e);
        setErros(erros);
      }
    };
    if (!identificacao) erros = { ...erros, identificacao: mensagem };
    if (!password) erros = { ...erros, password: mensagem };
    if (identificacao && password && !erros.identificacao && !erros.password) {
      logar(identificacao, password);
    }
    setErros(erros);
  };

  return (
    <>
      <S.Wrapper>
        <S.WrapperImage>
          <S.WrapperTitle>
            <S.Title>Diario do Programador</S.Title>
          </S.WrapperTitle>
        </S.WrapperImage>
        <S.Form onSubmit={handleSubmit}>
          <S.WrapperForm>
            <div>
              <img src={logo}></img>
            </div>
            <Input
              width={"50%"}
              padding="10px"
              icon={<AiOutlineMail size={25} />}
              placeholder="email ou username"
              id="email"
              value={identificacao}
              onChange={(e) => {
                setidentificacao(e.target.value);
              }}
              error={erros.identificacao}
            ></Input>
            <Input
              width={"50%"}
              padding="10px"
              icon={<BiLockAlt size={25} />}
              type="password"
              placeholder="senha"
              id="senha"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              error={erros.password}
            ></Input>

            <S.ContainerButtons>
              <S.Logar type="submit">Fazer login</S.Logar>
              <S.Cadastrar type="button">Cadastrar-se</S.Cadastrar>
            </S.ContainerButtons>
          </S.WrapperForm>
        </S.Form>
      </S.Wrapper>
    </>
  );
};
export default Login;
