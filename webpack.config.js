const path = require("path"),
  process = require("process"),
  CleanWebpackPlugin = require("clean-webpack-plugin"),
  ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

const PATHS = {
  libsPath:path.resolve(process.cwd(),"./component/"),

}

const Static = {
  "entry":{
    "dev":"qb-ui-demo",
    "production":"qb-ui"
  }
}

var init = function (env) {
  

      //env = "production";

      var entry = {};
      var filename = Static.entry[env];
      entry[filename] = "./components/index.js";

      var sourceMap = "";

      if(env ==="dev"){
        sourceMap="?sourceMap";
      }

      var Config = {
        entry:entry,
        output: {
          path: __dirname + "/build",
          libraryTarget: 'umd',
          library: '[name]',
          filename: '[name].js'
        },
        //devtool:"eval-source-map",//无能模式
          //devtool:"cheap-module-eval-source-map",无能模式
          //devtool: "cheap-source-map",   能调试  sass soucemap error
          //devtool:"cheap-eval-source-map", 不能调试 
          devtool:"source-map", //  都行  最慢
          //devtool: "#eval",     能调试  sass soucemap error
          //devtool: "#eval", 
        externals: {'react': 'react', 'react-dom': 'react-dom',"lodash":"lodash"},
      /*  resolve: {
          alias: {
            "lodash":PATHS.libsPath+"/common/lodash.js"
          }
        },*/
        module: {
            rules: [{
                test: /\.js?$/,
                loader: 'babel-loader',
                //exclude: /(node_modules|bower_components)/,
                options: {
                    presets: ["react", ["es2015"]],//,{ "modules": false }
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
            }, {test: /\.css$/,
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
          //new webpack.optimize.OccurenceOrderPlugin(),  webpack2 已经默认有这个功能了 
          new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify(env)
            }
          }),
          // new CleanWebpackPlugin(['dist', 'build'], {
          //     //root: '/full/project/path',  绝对路径
          //     verbose: true,  //是否输出到控制台
          //     dry: false,  //
          //     //exclude: ['shared.js']  //忽略文件
          // })
          new ExtractTextPlugin({filename:(filename+".css"),allChunks:false})
        ],
      };
      if(env === "production"){
        devare Config.devtool;
        Config.plugins.push(new webpack.optimize.UglifyJsPlugin({
            compressor: {
              warnings: false
            }
          }))
      }


      return Config;

}

module.exports = init;
