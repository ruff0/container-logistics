const webpack = require("webpack")
const path = require("path")

const outFolder = path.resolve(__dirname, "./dist")

module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server", // "only" prevents reload on syntax errors
    "./src/index.js"
  ],
  output: {
    path: outFolder,
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /.(js|jsx)?$/,
      loaders: ["react-hot", "babel?presets[]=es2015&presets[]=react"],
      exclude: [/node_modules/, /lib/]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
}
