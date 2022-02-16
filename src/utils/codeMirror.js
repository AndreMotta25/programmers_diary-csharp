import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { json } from "@codemirror/lang-json";
import { xml } from "@codemirror/lang-xml";
import { markdown } from "@codemirror/lang-markdown";
import { php } from "@codemirror/lang-php";
export default {
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
