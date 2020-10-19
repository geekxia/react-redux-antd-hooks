// cnpm install http-proxy-middleware -D

const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/soso',
    createProxyMiddleware({
      target: 'https://c.y.qq.com',
      changeOrigin: true,
    })
  );
};
