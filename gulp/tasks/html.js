import gulp from "gulp";
import { plugins } from "../config/plugins.js";
import { filePaths } from "../config/paths.js";
import { isBuild } from "../../gulpfile.js";

import fileInclude from "gulp-file-include";
import webpHtml from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";
import htmlmin from "gulp-htmlmin";

export const html = () => {
	return gulp.src(filePaths.src.html)
		.pipe(plugins.handleError("HTML"))
		.pipe(fileInclude())
		.pipe(plugins.replace(/@img\//g, "img/"))
		.pipe(plugins.if(isBuild, webpHtml()))
		.pipe(htmlmin({
			useShortDoctype: true,
			sortClassName: true,
			removeComments: isBuild,
			// collapseWhitespace: isBuild  // Uncomment if HTML minification is required
		}))
		.pipe(plugins.if(
			isBuild,
			versionNumber({
				value: "%DT%",
				append: {
					key: "_v",
					cover: 0,
					to: ["css", "js"]
				},
				output: {
					file: "gulp/version.json"
				},
			})
		))
		.pipe(gulp.dest(filePaths.build.html))
		.pipe(plugins.browserSync.stream())
}