var path = require('path');
var Webpack = require('webpack');
var buildPath = path.resolve(__dirname, 'static/js');
var indexPath = path.resolve(__dirname, 'src', 'index.js');

module.exports = {
    entry: [indexPath],
	output: {
		path: buildPath,
		filename: 'bundle.js',
		publicPath: '/static/js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, 'src'),
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['env', 'react']
				}
			},
			{
				test: /\.css/,
				loaders: ['style-loader', 'css-loader'],
				include: path.join(__dirname, 'src')
			}
		]
	},
	devServer: {
		port: 3030,
    historyApiFallback: {
      index: 'static/index.html'
    }
	}
};
