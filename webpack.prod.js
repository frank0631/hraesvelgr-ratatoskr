const path = require("path");
const webpack = require("webpack");

const HRAESVELGR_API_HOST = process.env.HRAESVELGR_API_HOST || "http://hraesvelgr.frank0631.com";
const HRAESVELGR_API_PORT = process.env.HRAESVELGR_API_PORT || "9000";

module.exports = {
  entry: ['./src/index.web.jsx'],
  mode: "production",
  plugins: [
      new webpack.DefinePlugin({ 'HRAESVELGR_API_HOST': JSON.stringify(API_HOST) }),
      new webpack.DefinePlugin({ 'HRAESVELGR_API_PORT': JSON.stringify(API_PORT) })
      ],
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
  }
};