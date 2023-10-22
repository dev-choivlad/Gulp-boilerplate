import gulp from "gulp";
import { filePaths } from "../config/paths.js";
import { plugins } from "../config/plugins.js";

import fs from "fs";
import chalk from "chalk";
import fonter from "gulp-fonter-fix"; // Converts otf --> ttf & woff
import ttf2woff2 from "gulp-ttf2woff2";

const fontWeights = {
	thin: 100,
	extralight: 200,
	light: 300,
	regular: 400,
	medium: 500,
	semibold: 600,
	bold: 700,
	extrabold: 800,
	heavy: 800,
	black: 900,
}

export const otfToTtf = () => {
	// Searching fonts .otf
	return gulp.src(`${filePaths.srcFolder}/fonts/*.otf`, {}) // serarching for [.otf] fonts
	.pipe(plugins.handleError("FONTS"))
	.pipe(fonter({
			formats:["ttf"] // converting to [.ttf]
		}))
	.pipe(gulp.dest(`${filePaths.srcFolder}/fonts/`)) // exporting to the source folder
}

export const ttfToWoff = () => {
	return gulp.src(`${filePaths.srcFolder}/fonts/*.ttf`, {}) // Searching for [.ttf] fonts
	.pipe(plugins.handleError("FONTS"))
	.pipe(ttf2woff2()) // Converting to [.woff2]
	.pipe(gulp.dest(`${filePaths.build.fonts}`)) // exporting to the build folder

	// Converting to [.woff]. Uncomment if needed
	/*.pipe(gulp.src(`${filePaths.srcFolder}/fonts/!*.ttf`), {})// Searching for [.ttf] fonts
	.pipe(fonter({
			formats: [".woff"]
		}))
		.pipe(gulp.dest(`${filePaths.build.fonts}`)) // exporting to the build folder
	*/

	.pipe(gulp.src(`${filePaths.srcFolder}/fonts/*.{woff, woff2}`)) // searching for [.woff, .woff2] fonts
		.pipe(gulp.dest(`${filePaths.build.fonts}`)) // exporting to the build folder
}

export const fontStyle = () => {
	// Getting the path to the fonts style file
	const fontStyleFile = `${filePaths.srcFolder}/scss/fonts.scss`;

	// Checking if there are font files
	fs.readdir(filePaths.build.fonts, function(err, fontsFiles) {
		if (fontsFiles) {
			// Checking if there is a font style file
			if (!fs.existsSync(fontStyleFile)) {
				// If the file does not exist, create it
				fs.writeFile(fontStyleFile, '', cb);
				let newFileOnly;

				fontsFiles.forEach((file) => {
					// Import fonts to the font style file
					const fileName = file.split('.')[0];

					if (newFileOnly !== fileName) {
						const fontName = fileName.split('-')[0] ? fileName.split('-')[0] : fileName;
						const fontWeight = fileName.split('-')[1] ? fileName.split('-')[1] : fileName;
						const fontWeightValue = fontWeights[fontWeight.toLowerCase()];

						fs.appendFile(
							fontStyleFile,
							`@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fileName}.woff2") format("woff2"), url("../fonts/${fileName}.woff") format("woff");\n\tfont-weight: ${fontWeightValue};\n\tfont-style: normal;\n}\r\n`,
							cb
						)
						newFileOnly = fileName;
					}
				})
			} else {
				// If there is a file, delete
				console.log(
					chalk.bold.white.bgYellowBright(
						// "The file scss/fonts.scss already exists. \nTo update the file, you need to delete it"
						"Файл scss/fonts.scss уже существует. \nДля обновления файла его нужно удалить"
					)
				);
			}
		}
	})

	return gulp.src(filePaths.srcFolder);
	function cb(err) {
		if (err) {
			console.log(
				chalk.bold.white.bgRed(
					// "The fonts.scss file creating error"
					"Ошибка записи файла"
				)
			)
		} else {
			console.log(
				chalk.bold.white.bgGreenBright(
					// The fonts.scss file has been created
					"Файл fonts.scss успешно записан"
				)
			)
		}
	}
}
