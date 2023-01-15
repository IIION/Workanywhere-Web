const { defineConfig } = require("@vue/cli-service");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
    resolve: {
      fallback: {
        "child_process": false,
        "fs": false,
        "net": false,
        "tls": false
      }
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  },
});