const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "development",
  stats: "minimal",
  devtool: "inline-source-map",

  resolve: {
    fallback: { path: require.resolve("path-browserify") },
  },

  output: {
    filename: "js/[name].js",
    path: __dirname + "/public/helper/include/",
  },

  watch: true,
  watchOptions: {
    ignored: "/node_modules/",
  },

  module: {
    rules: [
      {
        test: require.resolve("jquery"),
        use: [
          {
            loader: "expose-loader",
            options: {
              exposes: {
                globalName: "$",
                override: true,
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/stylesheet.css",
      chunkFilename: "[id].css",
    }),
  ],
});
