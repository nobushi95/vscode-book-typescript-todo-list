const path = require("path");

let exclude = [path.resolve(__dirname, "public")];

module.exports = {
  entry: "./src/frontend/index.ts", // 最初に実行するソースを指定
  mode: "development",
  devtool: "source-map", // デバッグ参照用
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader", // typescriptをビルドするためにts-loaderを設定
        exclude,
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader", // デバッグ参照用（TS版）
        exclude,
      },
    ],
  },
  devServer: {
    contentBase: "public/html/",
  },
  output: {
    filename: "index.js", // 出力されるファイルを指定
    path: path.resolve(__dirname, "./public/html/js"),
  },
};
