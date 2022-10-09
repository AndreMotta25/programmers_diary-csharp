import { useContext, useEffect, useRef } from "react";
import { UserContext } from "../../contexts/Auth";
import { useNavigate } from "react-router-dom";

import Notification from "../../components/Notification";
import * as utils from "../../utils/utils";

const RequireAuth = ({ children }) => {
  const { user, loading, error, insertError } = useContext(UserContext);
  const navigate = useNavigate();
  const timer = useRef();

  const redirecionar = () => {
    
    timer.current = setTimeout(() => {
      console.log("req")
      navigate("/");

    }, 5000);

  };

  useEffect(() => {
    const verifyLogin = async () => {
      if ((error && !loading && !user?.email) || utils.possuiAtributos(user) <= 0)
        redirecionar();
      else if (!loading && user.email) insertError(null);
    };
    verifyLogin();
    return () => {
      clearInterval(timer.current)
    }
  }, [loading, user]);

  return (
    (!error && !loading && utils.possuiAtributos(user) >= 1 && children) ||
    (error && !loading && <Notification>{error}</Notification>) ||
    (!error && !loading && utils.possuiAtributos(user) <= 0 && (
      <Notification>Faça login para ver essa pagina</Notification>
    ))
  );
};
export default RequireAuth;
