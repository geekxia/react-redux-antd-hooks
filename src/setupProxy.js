// cnpm install http-proxy-middleware -D

const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://10.36.138.24:9000',
      changeOrigin: true,
    })
  );
};
