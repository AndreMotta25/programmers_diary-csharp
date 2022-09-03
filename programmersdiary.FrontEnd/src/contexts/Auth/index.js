import { createContext, useEffect, useState } from "react";
import api from "../../utils/cardRepository";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [logged, setLogged] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const teste = async () => {
      const token = localStorage.getItem("authToken");
      if (token !== null) await validaToken(token);

      setLoading(false);
    };
    teste();
  }, []);

  const validaToken = async (token) => {
    try {
      const response = await api.get(`/usuario/Validar-Token/${token}`);
      if (response.data.succeeded) {
        setUser({ email: response.data.email, id: response.data.id });
      }
    } catch (e) {
      localStorage.removeItem("authToken");
      setError("O tempo do seu token expirou, faça login novamente!");
      setUser(null);
    }
    setLoading(false);
  };

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setUser({});
      navigate("/");
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [logged]);

  const logout = () => {
    localStorage.removeItem("authToken");
    setLogged(!logged);
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
        error,
        insertError: setError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
