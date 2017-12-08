const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DIST_PATH = './dist';

module.exports = {
  entry: {
    app: './src/main',
    vendor: './src/vendor'
  },

  output: {
    path: path.resolve(__dirname, DIST_PATH),
    filename: '[name].bundle.js'
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      api: path.resolve(__dirname, './src/api'),
      components: path.resolve(__dirname, './src/components'),
      store: path.resolve(__dirname, './src/store'),
      template: path.resolve(__dirname, './src/template')
    },
    extensions: ['.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            })
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
        include: /node_modules/
      },
    ]
  },

  plugins: [
    new CleanWebpackPlugin(DIST_PATH),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      filename: 'answer.html',
      template: 'src/assets/answer.html'
    }),
    new ExtractTextPlugin('[name].css'),
    new webpack.NamedModulesPlugin(),
  ],

  devServer: {
    contentBase: path.resolve(__dirname, DIST_PATH),
    historyApiFallback: true,
    noInfo: true,
    hot: true,
    port: 8080,
    host: '0.0.0.0'
  },

  devtool: '#eval-source-map'
}


if (process.env.NODE_ENV === 'production') {

  module.exports.devtool = '#source-map';

  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    // new CopyWebpackPlugin([
    //   { from: 'data', to: '' }
    // ]),
  ])
}
