// codeMirror
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { json } from "@codemirror/lang-json";
import { xml } from "@codemirror/lang-xml";
import { markdown } from "@codemirror/lang-markdown";
import { php } from "@codemirror/lang-php";
// prettier
import cssPrettier from "prettier/parser-postcss";
import typescriptPrettier from "prettier/parser-typescript";
import babelPrettier from "prettier/parser-babel";
import vuePrettier from "prettier/parser-html";
import angularPrettier from "prettier/parser-angular";
import htmlPrettier from "prettier/parser-html";
import markdownPrettier from "prettier/parser-markdown";
import phpPrettier from "@prettier/plugin-php/standalone";
import xmlPrettier from "@prettier/plugin-xml";

export const codeLanguages = {
  js: javascript({ jsx: true }),
  css: css(),
  html: html(),
  json: json(),
  xml: xml(),
  ts: javascript({ jsx: true }),
  scss: css(),
  less: css(),
  markdown: markdown(),
  php: php(),
};
export const pluginsLista = [
  cssPrettier,
  typescriptPrettier,
  babelPrettier,
  vuePrettier,
  angularPrettier,
  htmlPrettier,
  markdownPrettier,
  phpPrettier,
  xmlPrettier,
];

export const linguagens = [
  {
    id: 1,
    label: "js",
    value: "babel",
  },
  {
    id: 2,
    label: "css",
    value: "css",
  },
  {
    id: 3,
    label: "json",
    value: "babel",
  },
  {
    id: 4,
    label: "ts",
    value: "typescript",
  },
  {
    id: 5,
    label: "scss",
    value: "scss",
  },
  {
    id: 6,
    label: "less",
    value: "less",
  },

  {
    id: 7,
    label: "markdown",
    value: "markdown",
  },

  {
    id: 8,
    label: "html",
    value: "html",
  },

  {
    id: 9,
    label: "php",
    value: "php",
  },
  {
    id: 10,
    label: "xml",
    value: "xml",
  },
];

export function possuiAtributos(obj) {
  return Object.getOwnPropertyNames(obj).length;
}

export function verifyPassword(password) {
  let passwordIsValid = false;
  if (password) {
    const regex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    if (regex.test(password)) {
      passwordIsValid = true;
    } else {
      passwordIsValid = false;
    }
  }
  return { password, passwordIsValid };
}

export function validateForm(form) {
  const mensagem = "o campo não pode ficar vazio";
  const errosCadastrais1 = {};

  const { password, passwordIsValid } = verifyPassword(
    form.elements["password"].value
  );
  const verifyFields = {
    samePassword: (pass) =>
      (pass === password && true) || "Deve ser igual a senha",
    username: (user) =>
      (!user.includes("@") && true) || "O nome de usuario não pode conter @",
    password: (pass) =>
      (!passwordIsValid &&
        "A Senha deve ter numero, um simbolo especial e uma letra maiuscula") ||
      true,
    oldPassword: (pass) => true,
    email: (email) =>
      (email.includes("@") && true) || "Endereço de email invalido",
  };

  for (const field of form.elements) {
    if (field.name) {
      if (!field.value) errosCadastrais1[field.name] = mensagem;
      else if (field.value) {
        const mensage = verifyFields[field.name](field.value);
        if (mensage !== true) errosCadastrais1[field.name] = mensage;
      }
    }
  }
  return errosCadastrais1;
}

export const toCamelCase = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
};

export const typeErrorsIdentity = {
  username: {
    DuplicateUserName: "Usuario já em uso",
    InvalidUserName:
      "Usuario é inválido, pode conter apenas letras ou dígitos.",
    UserName: "O campo do usuario não pode estar vazio",
  },
  email: {
    DuplicateEmail: "Email já em uso",
    InvalidEmail: "Email invalido",
  },

  oldPassword: {
    PasswordMismatch: "Senha errada",
  },

  password: {
    PasswordRequiresUpper:
      "A Senha deve ter numero, um simbolo especial e uma letra maiuscula",
    PasswordRequiresLower:
      "A Senha deve ter numero, um simbolo especial e uma letra maiuscula",
    PasswordRequiresDigit:
      "A Senha deve ter numero, um simbolo especial e uma letra maiuscula",
    PasswordRequiresNonAlphanumeric:
      "A Senha deve ter numero, um simbolo especial e uma letra maiuscula",
    PasswordTooShort: "A senha deve conter ao menos 5 caracteres",
    Password: "A senha deve conter ao menos 5 caracteres",
  },
};
