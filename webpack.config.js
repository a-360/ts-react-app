<<<<<<< HEAD
=======
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

>>>>>>> develop
module.exports = {
	mode: "development",
	entry: "./src/index.tsx",
	output: {
<<<<<<< HEAD
    	path: `${__dirname}/dist`,
    	filename: "bundle.js"
=======
		path: path.resolve(__dirname, 'dist'),
    	filename: "bundle.js",

>>>>>>> develop
    },
	module: {
    	rules: [
            {
		        test: /\.tsx?$/,
<<<<<<< HEAD
=======
				exclude: /node_modules/,
>>>>>>> develop
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
<<<<<<< HEAD
    }
=======
    },
	devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		open: true,
    },
	externals: {
    	"react": "React",
    	"react-dom": "ReactDOM"
    },
	plugins: [
		new HtmlWebpackPlugin({template: './src/index.html'})
	]
>>>>>>> develop
};
	
