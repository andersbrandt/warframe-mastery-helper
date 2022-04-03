const path = require("path");
const fs = require("fs");
//const marked = require("marked");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const OptimizeCssnanoPlugin = require("@intervolga/optimize-cssnano-plugin");
const webpack = require("webpack");
const { utils } = require("./src/js/utils.js");

//const content = fs.readFileSync("./src/markdown/beginner-guide.md", "utf8");
//var output = marked(content, {
//  headerIds: false,
//});
//fs.writeFileSync("./src/views/beginner-guide.hbs", output);

module.exports = {
  resolve: {
    fallback: { path: require.resolve("path-browserify") },
  },

  entry: {
    main: ["./src/main.js", "./src/scss/stylesheet.scss"],
    "start-page": ["./src/start-page.js"],
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: "/node_modules/",
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        exclude: "/node_modules/",
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "font/",
              publicPath: "../font/",
            },
          },
        ],
      },
      {
        test: /\.hbs$/,
        exclude: "/node_modules/",
        loader: "handlebars-loader",
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      utils: "utils",
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
};
