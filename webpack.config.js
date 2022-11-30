const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = function(env, argv) {
  return {
    entry: path.join(__dirname, "/src/main/index.js"),
    output: {
      path: path.join(__dirname, "/dist"), // the bundle output path
      filename: "main.js", // the name of the bundle
      clean: true  // clean dist folder before each build
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/main/index.html", // to import index.html file inside index.js
      }),
      new webpack.DefinePlugin({
        'FAKE_API': JSON.stringify(env.fakeApi)
      })
    ],
    devServer: {
      port: 3030, // you can change the port
    },
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, // .js and .jsx files
          exclude: /node_modules/, // excluding the node_modules folder
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(sa|sc|c)ss$/, // styles files
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
          loader: "url-loader",
          options: { limit: false },
        },
      ],
    },
    resolve: {
      enforceExtension: false, // allows to import files without writing extension (import * from 'components/App')
      extensions: ['.js', '.jsx', '.scss', '.html', '.json'], // list of known extensions
    },
    optimization: {
      minimize: true
    }
  }
};