const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = merge(common, {
  mode: "production",

  output: {
    filename: "js/[name].min.js",
    path: __dirname + "/public/helper/include/",
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/stylesheet.min.css",
      chunkFilename: "[id].css",
    }),

    new CssMinimizerPlugin({
      minimizerOptions: {
        preset: [
          "default",
          {
            discardComments: { removeAll: true },
          },
        ],
      },
    }),

  ],
});
