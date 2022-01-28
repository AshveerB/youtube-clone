const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
			'/api',
			createProxyMiddleware({
				target: 'https://youtube-clone-ab.herokuapp.com/',
				changeOrigin: true,
			})
		);
};