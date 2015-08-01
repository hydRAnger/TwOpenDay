var join = require('path').join;
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var PageGeneratorPlugin = function() {};

PageGeneratorPlugin.prototype.pathToFilename = function(path) {
  if (path === '/') {
    return 'index.html';
  }

  path = path.replace('/', '');

  if (path.indexOf('.html') === -1) {
    path += '.html';
  }

  return path;
};

PageGeneratorPlugin.prototype.emitHtml = function(path, html, pageMeta, template, compilation) {
  var filename = this.pathToFilename(path);
  compilation.assets[filename] = {
    source: function() {
      var title = pageMeta.title || '';
      return template.replace('<title>TwOpenDay</title>', '<title>' + title + '</title>').replace('<!-- body -->', html);
    },
    size: function() {
      return html.length;
    }
  };
};

var plugins = [
  new webpack.NoErrorsPlugin(),
  new HtmlWebpackPlugin({
    title: 'TwOpenDay',
    template: 'app/default.html',
    filename: 'default.html',
    env: process.env.NODE_ENV
  }),
];

var config = {
  context: join(__dirname, '/app'),
  entry: {
    main: ['./styles/main.less', './scripts/main.jsx']
  },
  node: {
    buffer: false,
    __filename: true
  },
  output: {
    path: join(__dirname, '/dist/assets'),
    publicPath: '/',
    filename: '[name]_[hash].js',
    library: 'NSApp',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, loaders: ['react-hot', 'babel?cacheDirectory'], include: /app\/scripts/},
      {test: /\.less$/, loader: 'style!css!less'},
      {test: /\.(eot|woff|woff2|ttf|svg|png|jpg)($|\?)/, loader: 'file'},
      {test: /\.(js|jsx)$/, loader: 'babel?cacheDirectory', include: /node_modules\/react-form-utils/}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: plugins
};

module.exports = config;
