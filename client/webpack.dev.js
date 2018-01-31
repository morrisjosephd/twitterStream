const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devServer: {
    contentBase: `${__dirname}/dist`,
    historyApiFallback: true,
    port: 3000,
  },
});
