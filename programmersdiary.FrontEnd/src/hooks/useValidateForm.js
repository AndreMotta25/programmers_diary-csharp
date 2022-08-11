import { useState, useEffect } from "react";
import useVerifyPassword from "./useVerifyPassword";

const useValidadeForms = (defaultValue) => {
  const { passwordIsValid, password, setPassword } = useVerifyPassword("");

  const verifyFields = {
    samePassword: (pass) =>
      (pass === password && true) || "Deve ser igual a senha",
    username: (user) => (!user.includes("@") && true) || "weeo",
    password: (pass) =>
      (!passwordIsValid &&
        "A Senha deve ter numero, um simbolo especial e uma letra maiuscula") ||
      true,
  };

  const [form1, setForm1] = useState(defaultValue);
  const [error, setErros] = useState({});

  const mensagem = "o campo não pode ficar vazio";

  useEffect(() => {
    const errosCadastrais1 = {};

    if (form1) {
      setPassword(form1.elements["password"]);
      for (const field of form1.elements) {
        if (field.name) {
          if (!field.value) errosCadastrais1[field.name] = mensagem;
          else {
            const mensage = verifyFields[field.name](field.value);
            errosCadastrais1[field.name] = mensage ? mensage : "";
          }
        }
      }
    }
    setErros({ ...errosCadastrais1 });
  }, [form1]);

  return { form1, setForm1, error };
};
export default useValidadeForms;
