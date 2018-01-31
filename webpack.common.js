const path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, 'src', 'index.js'),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader'],
      }],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
};

