const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    another: "./src/another-module.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  // enable source map to track code in order to make debugging easier
  devtool: "inline-source-map",
  // setup webpack-dev-server
  // keep bundle files in memory
  devServer: {
    static: "./dist",
  },
  // add this config when there are multi entrypoint on a single HTML page,
  // otherwise, we conld get into trouble
  optimization: {
    runtimeChunk: "single",
    // separate duplicated dependencies from chunk files
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    // generate HTML files (index.html) and inject bundle files automatically in /dist
    new HtmlWebpackPlugin({
      title: "Webpack Demo",
    }),
  ],
};
