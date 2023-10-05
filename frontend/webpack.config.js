const path = require("path");

module.exports = {
	entry: "./src/index.js", // Your entry point file
	output: {
		filename: "bundle.js", // The name of the output bundle
		path: path.resolve(__dirname, "dist"), // The directory where the bundle should be created
	},
	module: {
		rules: [
			{
				test: /\.js$/, // Match JavaScript files
				exclude: /node_modules/, // Exclude node_modules directory
				use: {
					loader: "babel-loader", // Use Babel for transpilation
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"], // Configure Babel presets as needed
					},
				},
			},
		],
	},
	resolve: {
		fallback: {
			path: require.resolve("path-browserify"),
			os: require.resolve("os-browserify/browser"),
			crypto: require.resolve("crypto-browserify"),
		},
	},
};
