import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const paths = {
	src: path.resolve(__dirname, "src"),
	build: path.resolve(__dirname, "dist"),
}

export const webpackConfig = (isMode) => {
	return {
		entry: ["@babel/polyfill", path.join(path.src, "js/app.js")],
		mode: isMode ? "development" : "production",
		output: {
			path: path.join(paths.build, "js"),
			filename: "app.min.js",
			publicPath: "/",
		},
		module: {
			rules: [
				{
					test: /\.m?js$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"],
						},
					},
					resolve: {
						fullySpecified: false,
					}
				}
			]
		},
	};
}

/*
import * as pathNode from "path";

const srcFolder = 'src';
const buildFolder = 'dist';

const paths = {
	src: pathNode.resolve(srcFolder),
	build: pathNode.resolve(buildFolder),
}

export const webpackConfig = (isMode) => ({
	entry: ['@babel/polyfill', `${paths.src}/js/app.js`],
	mode: isMode ? 'development' : 'production',
	cache: {
		type: 'filesystem', // 'memory' by default
		cacheDirectory: `${paths.src}/.temporary_cache`,
	},
	output: {
		path: `${paths.build}/js`,
		filename: 'app.min.js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
				resolve: {
					fullySpecified: false,
				},
			},
		],
	},
})*/
