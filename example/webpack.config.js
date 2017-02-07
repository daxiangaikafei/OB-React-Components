const path = require("path"),
  process = require("process"),
  OpenBrowserPlugin = require("open-browser-webpack-plugin"),
  HtmlWebpackPlugin = require('html-webpack-plugin');
  CleanWebpackPlugin = require("clean-webpack-plugin"),
  ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const PATHS = {
  libsPath:path.resolve(process.cwd(),"./components/")
}
const options = {
  ip:"0.0.0.0",
  port:8086
}



let sourceMap = "?sourceMap";

var Config = {
  entry:{
    "index":"./example/app.js"
  },
  output: {
    path: __dirname + "/build",
    filename: "bundle[hash:8].js"
  },

  devtool:"source-map", //  都行  最慢
  resolve: {
    alias: {
      "qb-ui":PATHS.libsPath+"/index.js"
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    hot: true,
    inline: true,
    host: options.ip,
    port: options.port,
    //proxy: {}
  },
  module: {
      rules: [{
          test: /\.js?$/,
          loader: 'babel-loader',
          options: {
              presets: ["react", ["es2015"]],
              plugins: ['lodash'],
          }
      }, {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {loader:"css-loader"+sourceMap},
              {loader:"postcss-loader"},
              {loader:"sass-loader"+sourceMap}
            ]
          })
      }, {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {loader:"css-loader"},
              {loader:"postcss-loader"}
            ]
          })
      }]
  },
  plugins: [
    new LodashModuleReplacementPlugin,
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: __dirname + '/index.html',
        inject: 'true'
    }),
    new ExtractTextPlugin("style.css"),
    new OpenBrowserPlugin({ url: 'http://localhost:'+options.port})
  ],
};    
     


module.exports = Config;
