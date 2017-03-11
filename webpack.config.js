const path = require('path');
const webpack = require('webpack');
module.exports = {
  devtool: '#source-map',
  context: __dirname,
   entry: [
     './app/index.js'
   ],
   output: {
     path: __dirname,
     filename: 'bundle.js',
     publicPath: './public'
   },
   module: {
     loaders: [
       {test: /\.jsx?$/,
         loader: 'babel-loader',
         include: path.join(__dirname, 'app'),
         exclude: /node_modules/,
         query: {
           presets: ['es2015', 'react']
         }
       },
        {test: /\.css$/, loaders: 'style!css?module=true'},
        {test: /\.svg$/, loaders: 'file'},
        { test: /\.scss$/, loader: 'style!css!sass' },
        {test: /\.png$/, loader: 'url-loader'}
     ]
   },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css']
  }
};
