var path = require("path");
var webpack = require("webpack");

module.exports = {
  resolve: {
    modulesDirectories: ["node_modules", "resources/js"]
  },
  module: {
    loaders: [
      { exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("package.json", [""])
    )
  ]
};
