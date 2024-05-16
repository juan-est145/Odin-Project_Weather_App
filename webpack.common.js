const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =
{
	entry : './src/index.ts',
	output:{
		filename: '[name].bundle.js',
		path : path.resolve(__dirname, 'dist'),
		clean: true,
	},
	module: {
		rules:[
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.tsx?$/,
        		use: 'ts-loader',
        		exclude: /node_modules/,
			},
		],
	},
	resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
	plugins: [
		new HtmlWebpackPlugin({
			inject: 'head',
			scriptLoading: 'defer',
			template: './src/index.html',
		})
	],
};