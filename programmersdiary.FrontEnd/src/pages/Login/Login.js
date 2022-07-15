import Input from "../../components/Input";
import * as S from "./styles";
import logo from "../../assets/logo.png";
import { AiOutlineMail } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { HiOutlineCursorClick } from "react-icons/hi";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../contexts/Auth";
import Loading from "../../components/Loading";

const Login = () => {
  const [identificacao, setidentificacao] = useState("");
  const [password, setPassword] = useState("");
  const [erros, setErros] = useState({});
  const navigate = useNavigate();
  const { sign, user } = useContext(UserContext);
  const [entrando, setEntrando] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntrando(true);
    const mensagem = "Campo invalido";
    let erros = {};

    const logar = async (identificacao, password) => {
      try {
        await sign(identificacao, password);
        setEntrando(false);
        navigate("/home");
      } catch (e) {
        erros = {
          ...erros,
          identificacao: "Usuario ou Senha estão incorretos",
        };
        setEntrando(false);
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
        <S.WrapperWithColor>
          <S.Form onSubmit={handleSubmit}>
            <S.WrapperForm>
              <div>
                <img src={logo}></img>
              </div>
              <S.Title>Entre no seu Diário do Programador</S.Title>
              <Input
                width={"50%"}
                padding="10px"
                label={<AiOutlineMail size={25} />}
                placeholder="Email ou Username"
                id="email"
                value={identificacao}
                onChange={(e) => {
                  setidentificacao(e.target.value);
                }}
                error={erros.identificacao}
                borderRadius="10px"
                shadow="4px 4px 4px rgba(0,0,0,70%)"
              ></Input>
              <Input
                width={"50%"}
                padding="10px"
                label={<BiLockAlt size={25} />}
                type="password"
                placeholder="Senha"
                id="senha"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                error={erros.password}
                borderRadius="10px"
                shadow="4px 4px 4px rgba(0,0,0,70%)"
              ></Input>
              {entrando && <Loading />}
              <S.ContainerButtons>
                <S.Logar type="submit">Fazer login</S.Logar>
                <span style={{ color: "#fff" }}>ou</span>
                <S.Span onClick={() => navigate("/cadastrar")}>
                  Crie uma conta
                  <HiOutlineCursorClick size={25} color={"#fff"} />
                </S.Span>
              </S.ContainerButtons>
            </S.WrapperForm>
          </S.Form>
        </S.WrapperWithColor>
      </S.Wrapper>
    </>
  );
};
export default Login;
