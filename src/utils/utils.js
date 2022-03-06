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
    label: "json",
    value: "babel",
  },
  {
    id: 3,
    label: "ts",
    value: "typescript",
  },

  {
    id: 6,
    label: "css",
    value: "css",
  },
  {
    id: 7,
    label: "scss",
    value: "scss",
  },
  {
    id: 8,
    label: "less",
    value: "less",
  },

  {
    id: 11,
    label: "markdown",
    value: "markdown",
  },

  {
    id: 13,
    label: "html",
    value: "html",
  },

  {
    id: 15,
    label: "php",
    value: "php",
  },
  {
    id: 16,
    label: "xml",
    value: "xml",
  },
];
