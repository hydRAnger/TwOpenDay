var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var http = require('http');
var express = require('express');
var httpProxy = require('http-proxy');
var url = require('url');

var port = 8080;
var devServerURL = 'http://127.0.0.1:' + (port + 1);
var publicPath = '/assets';

var createProxyServer = function(endpointURL, ws) {
  return httpProxy.createProxyServer({
    target: endpointURL,
    ws: ws || false,
    headers: {
      host: url.parse(endpointURL).host
    }
  }).on('error', function(err) {
    console.log('Got error on proxy', endpointURL, err);
  });
};

var devServerProxy = createProxyServer(devServerURL, true);

var app = express();
app.use(function(req, res, next) {
  var policies = [
    "default-src 'self' http://127.0.0.1:* ws://127.0.0.1:*",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self'",
    "connect-src 'self' http://127.0.0.1:* ws://127.0.0.1:*",
  ];
  res.set('Content-Security-Policy', policies.join("; "));
  next();
});

app.use(publicPath, function(req, res) {
  req.url = publicPath + req.url;
  devServerProxy.web(req, res);
});

app.use('/socket.io', function(req, res) {
  req.url = '/socket.io' + req.url;
  devServerProxy.web(req, res);
});

app.use('/*', function(req, res) {
  req.url = publicPath + '/default.html';
  devServerProxy.web(req, res);
});

var config = require('./webpack.config');
config.entry.main = [
  'webpack-dev-server/client?http://127.0.0.1:' + port,
  'webpack/hot/dev-server'
].concat(config.entry.main);

config.debug = true;
config.devtool = 'eval';
config.output.pathinfo = true;
config.output.publicPath = publicPath + '/';
config.plugins.push(new webpack.HotModuleReplacementPlugin());

new WebpackDevServer(webpack(config), {
  hot: true,
  quiet: true,
  publicPath: config.output.publicPath,
  stats: { colors: true }
}).listen(port + 1, '127.0.0.1');

var server = http.createServer(app);
server.on('upgrade', function(req, socket, head) {
  devServerProxy.ws(req, socket, head);
});

server.listen(port, function(err) {
  if (err) {
    throw err;
  }
  console.info('Running dev server on port', port);
});
