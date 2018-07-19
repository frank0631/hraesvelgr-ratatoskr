const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ['./src/index.js'],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
        	presets: ['env'],
      	},
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "http://code.frank0631.com:34491/dist/",
    filename: "bundle.js"
  },
  devServer: {
  	inline: true,
    contentBase: path.join(__dirname, "public/"),
    disableHostCheck: true,
  }
};