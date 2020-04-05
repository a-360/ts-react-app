const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: "development",
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, 'dist'),
    	filename: "bundle.js",
    },
	module: {
    	rules: [
        	{
				test: /\.tsx?$/,
				exclude: /node_modules/,
            	use: "ts-loader"
        	},
			{
				test: /\.scss/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
		]
    },
	resolve: {
    	extensions: [".ts", ".tsx", ".js", ".json"]
    },
	devServer: {
    	contentBase: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		open: true,
    },
	plugins: [
		new HtmlWebpackPlugin({template: './src/index.html'})
	]
};
	
