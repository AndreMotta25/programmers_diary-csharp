const { createProxyMiddleware } = require("http-proxy-middleware");

const context = ["/card", "/linguagem"];

module.exports = function (app) {
  const appProxy = createProxyMiddleware(context, {
    target: "https://localhost:7169",
    secure: false,
  });

  app.use(appProxy);
};
