// This file describes everything we want Webpack to do to our files to ready them for production
var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "dist/assets",
    filename: "bundle.js",
    publicPath: "assets"
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: ["babel-loader"],
        query: {
          presets: [
            "latest",
            "stage-0",
            "react"
          ]
        }
      }
    ]
  }
}


//'loaders' in 'module' are all the different tasks we want webpack to perform
//'test: /\.js$/' means include all our js file, 'exclude: [..]' means exclude listed (node_modules)
//'devServer' craetes a server that will update everytime we change things
