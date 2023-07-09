const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
	context: path.resolve(__dirname, 'my-webpack-series'),
	mode: 'development',
	entry: {
		bundle: ['./src/js/index.js', './src/js/analitycs.js', './src/js/domain.js', './src/js/game.js'],
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		hot: true,
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'webpack shalnou',
			filename: 'index.html',
			template: './src/index.html',
			hash: true,
		}),
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
};
