const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /.tsx?$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /.html$/,
				use: 'html-loader',
			},
			{
				test: /.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
	devServer: {
		static: path.join(__dirname, 'dist'),
		compress: true,
		port: 3000,
	},
};
