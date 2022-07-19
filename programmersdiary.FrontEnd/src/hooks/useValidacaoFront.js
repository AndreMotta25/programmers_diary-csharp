// import * as utils from "../utils/utils";
const useValidacaoFront = (
  username,
  email,
  password,
  samePassword,
  passwordIsValid,
  campos
) => {
  const mensagem = "O campo não pode estar vazio";
  let errosCadastrais = {};

  for (const key in campos) {
    if (!campos[key]) errosCadastrais[key] = mensagem;
    else if (key === "samePassword" && campos[key] !== password)
      errosCadastrais[key] = "Deve ser igual a senha";
    else if (key === "password" && !passwordIsValid)
      errosCadastrais[key] =
        "A Senha deve ter numero, um simbolo especial e uma letra maiuscula";
    else if (key === "username" && username.includes("@"))
      errosCadastrais[key] =
        "O nome de usuario não pode ter o caractere especial @";
  }
  return { ...errosCadastrais };
};
export default useValidacaoFront;
