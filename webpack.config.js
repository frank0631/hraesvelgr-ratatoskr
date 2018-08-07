const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ['./src/index.web.jsx'],
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
      	test: /\.js$/,
	    include: [
	        /node_modules\/nidhogg-jquery/
	    ]
      },
	  {
	    // Most react-native libraries include uncompiled ES6 JS.
	    test: /\.js$/,
	    include: [
	        /node_modules\/react-native-/,
	        /node_modules\/react-router-native/,
	        /node_modules\/@indec/
	    ],
	    loader: 'babel-loader',
	    query: {
	        cacheDirectory: '.babel-cache'
	    }
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
  	historyApiFallback: true,
    contentBase: path.join(__dirname, "public/"),
    disableHostCheck: true,
  }
};