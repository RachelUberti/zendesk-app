const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [
      '@babel/polyfill',
      './src/App.tsx'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/assets')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false } },
          'postcss-loader'
        ]
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: [path.join(process.cwd(), 'dist/**/*')]
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/manifest.json', to: '../[name][ext]' },
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      warning: 'AUTOMATICALLY GENERATED FROM ./src/templates/iframe.html - DO NOT MODIFY THIS FILE DIRECTLY',
      template: './src/iframe.html',
      filename: 'iframe.html'
    })
  ]
};
