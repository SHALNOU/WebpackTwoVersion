const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
	context: path.resolve(__dirname, 'my-webpack-series'),
	mode: 'development',
	entry: {
		main: './src/js/index.js',
		analitycs: './src/js/analitycs.js',
		domain: './src/js/domain.js',
		game: './src/js/game.js'
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: 'webpack shalnou',
			template: './index.html'
		}),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader'],
		}]
	}
}