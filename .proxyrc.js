const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:1234/",
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};

