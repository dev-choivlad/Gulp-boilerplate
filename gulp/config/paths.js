import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`;
const srcFolder = `./src`;

const paths = {
	build: {
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		img: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/static/`,
	},
	src: {
		html: `${srcFolder}/*.html`,
		scss: `${srcFolder}/scss/style.scss`,
		js: `${srcFolder}/js/app.js`,
		img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,ico,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		svgicons: `${srcFolder}/svgicons/*.svg`,
		files: `${srcFolder}/static/**/*.*`,
	},
	watch: {},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
}