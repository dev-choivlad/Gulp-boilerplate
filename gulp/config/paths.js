import path from "path";
const projectDirName = path.basename(path.resolve());
const buildFolder = `./dist`;
const srcFolder = `./src`;


const filePaths = {
	build: {
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		img: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		static: `${buildFolder}/static/`,
	},
	src: {
		html: `${srcFolder}/*.html`,
		scss: `${srcFolder}/scss/style.scss`,
		js: `${srcFolder}/js/app.js`,
		img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,ico,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		svgicons: `${srcFolder}/svgicons/*.svg`,
		static: `${srcFolder}/static/**/*.*`,
	},
	watch: {
		html: `${srcFolder}/**/*.html`,
		scss: `${srcFolder}/scss/**/*.scss`,
		js: `${srcFolder}/js/**/*.js`,
		img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,ico,webp,svg}`,
		static: `${srcFolder}/static/**/*.*`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	projectDirName: projectDirName,
	ftp: `` // path to the required folder on server, gulp will add folder name automatically
}

export { filePaths };