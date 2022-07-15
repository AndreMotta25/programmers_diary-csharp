import { createContext, useEffect, useState } from "react";
import userRepository from "../../utils/userRepository";
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
          const response = await userRepository.get(`/Validar-Token/${token}`);
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

  const sign = async (identificacao, password) => {
    const userData = await userRepository.post("login", {
      identificacao: identificacao,
      password: password,
    });
    setUser({ email: userData.data.email, id: userData.data.id });
    setToken(userData.data.token);
  };
  const logout = () => {};
  const setToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        user,
        sign,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
