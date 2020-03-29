module.exports = {
	mode: "development",
	entry: "./src/index.tsx",
	output: {
    	path: `${__dirname}/dist`,
    	filename: "bundle.js"
    },
	module: {
    	rules: [
            {
		        test: /\.tsx?$/,
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
    }
};
	
