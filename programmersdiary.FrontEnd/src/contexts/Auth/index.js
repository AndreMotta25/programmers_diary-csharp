import { createContext, useEffect, useState } from "react";
import api from "../../utils/cardRepository";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const validaToken = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (token !== null) {
          const response = await api.get(`/usuario/Validar-Token/${token}`);
          if (response.data.succeeded) {
            setUser({ email: response.data.email, id: response.data.id });
            setLoading(false);
            return;
          }
        }
        setUser({ erro: "Faça login para ver essa pagina" });
      } catch (e) {
        // só vai entrar aqui se o token for invalido
        localStorage.removeItem("authToken");
        setUser({
          erro: "O tempo do seu token expirou, faça login novamente!",
        });
      }
      setLoading(false);
    };
    validaToken();
  }, []);

  useEffect(() => {
    setAuthorization(api);
    console.log("insert the auth");
  }, [user]);

  const setAuthorization = (api) => {
    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("authToken")}`;
  };

  const sign = async (identificacao, password) => {
    const userData = await api.post("usuario/login", {
      identificacao: identificacao,
      password: password,
    });
    setUser({ email: userData.data.email, id: userData.data.id });
    setToken(userData.data.token);
  };
  const logout = () => {
    localStorage.removeItem("authToken");
    setUser({});
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  const setToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        user,
        sign,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
