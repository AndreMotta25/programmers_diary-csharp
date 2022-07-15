import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/Auth";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import Notification from "../../components/Notification";

const RequireAuth = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const navigate = useNavigate();

  const redirecionar = () => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };

  useEffect(() => {
    const verifyLogin = async () => {
      if (user.erro && !loading) redirecionar();
    };
    verifyLogin();
  }, [loading]);

  return (
    (!user.erro && !loading && children) ||
    (user.erro && !loading && <Notification>{user.erro}</Notification>)
  );
};
export default RequireAuth;
