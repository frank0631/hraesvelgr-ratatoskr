const path = require("path");
const webpack = require("webpack");

console.log(process.env);

module.exports = {
  entry: ['./src/index.web.js'],
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
    resolve: {
        alias: {
            "react-native$": "react-native-web"
        },
        extensions: ['*', '.jsx',  '.web.js', '.js' ]    
     },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
  	inline: true,
    contentBase: path.join(__dirname, "public/"),
    disableHostCheck: true,
  }
};