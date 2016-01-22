
var express = require('express');
var rewrite = require('express-urlrewrite');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var WebpackConfig = require('./webpack.config');

var app = express();

app.use(webpackDevMiddleware(webpack(WebpackConfig), {
  publicPath: '/__build__/',
  stats: {
    colors: true
  }
}));

app.use(express.static(__dirname));

app.listen(8080, function () {
  console.log('Server listening on http://localhost:8080')
});
