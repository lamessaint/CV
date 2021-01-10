const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    open: true,
    port: 3000
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          attributes: true
        }
      },
      {
        test: /\.s?css$/i,
        use: [
          "style-loader",
          // { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          "sass-loader",
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread']
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, './src/assets/main.html')
    }),
    // new MiniCssExtractPlugin()
  ],
   devtool: "source-map"
}