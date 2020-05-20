const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const getJSLoaders = () => {
  const loaders = [{
      loader: 'babel-loader',
      options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-class-properties']
      }
  }];
  
  if (devMode) { loaders.push("eslint-loader"); }

  return loaders;
}
const devMode = process.env.NODE_ENV !== 'production';
const filenameByModeEnv = (name, ext) => devMode ? `${name}.${ext}` : `${name}.[hash].${ext}`;
console.log('Mode\'s development equals to', devMode ? 'development' : 'production');

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: ["@babel/polyfill", "./index.js"],
  output: {
    filename: filenameByModeEnv("bundle", "js"),
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    modules: ["src", "node_modules"],
    extensions: [".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@core": path.resolve(__dirname, "src/core"),
    },
  },
  devtool: devMode ? "source-map" : false,
  devServer: {
      port: 3000,
      hot: devMode,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "index.html",
      minify: {
          removeComments: !devMode,
          collapseWhitespace: !devMode,
      }
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/favicon.ico"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filenameByModeEnv("style", "css"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
              hmr: devMode,
              reloadAll: true,
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: getJSLoaders()
      },
    ],
  },
};
