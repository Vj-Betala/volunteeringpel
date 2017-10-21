const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const LessPluginAutoPrefix = require('less-plugin-autoprefix');

const autoprefixerBrowsers = ['last 2 versions', '> 1%', 'opera 12.1', 'bb 10', 'android 4'];

module.exports = merge(common, {
  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              plugins: [new LessPluginAutoPrefix({ browsers: autoprefixerBrowsers })],
            },
          },
        ],
      },
    ],
  },

  devServer: {
    contentBase: './dist/app',
    historyApiFallback: true,
    hot: true,
    inline: true,

    port: 3000,
    proxy: {
      '^/api/*': {
        target: 'http://localhost:8080/api/',
        secure: false,
      },
    },
  },
});
