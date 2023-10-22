import gulp from "gulp";
import { plugins } from "../config/plugins.js";
import { filePaths } from "../config/paths.js";
import { isBuild, isDev } from "../../gulpfile.js";

import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import cleanCss from "gulp-clean-css"; // compressing css
import webpCss from "gulp-webpcss";
import groupMediaQueries from "gulp-group-css-media-queries";
import autoprefixer from "autoprefixer";
import postcss from "gulp-postcss";
import postcssPresetEnv from "postcss-preset-env"

const sass = gulpSass(dartSass);
export const scss = () => {
	const webpConfig = {
		webpClass: ".webp",
		noWebpClass: ".no-webp"
	}

	return(gulp.src(filePaths.src.scss, { sourceMap: isDev }))
		.pipe(plugins.handleError("SCSS"))
		.pipe(sass({ outputStyle: "expanded" }))
		.pipe(plugins.replace(/@img\//g, "../img/"))
		// grouping media queries for production only
		.pipe(plugins.if(isBuild, groupMediaQueries()))
		.pipe(plugins.if(isBuild, webpCss(webpConfig)))
		.pipe(plugins.if(isBuild, postcss([autoprefixer(), postcssPresetEnv()])))
		// Uncomment if an uncompressed style files is needed
		//.pipe(gulp.dest(filePaths.build.css)
		.pipe(plugins.if(isBuild, cleanCss({
			compatibility: "ie8"
		})))
		.pipe(rename({ extname: ".min.css"}))
		.pipe(gulp.dest(filePaths.build.css))
		.pipe(plugins.browserSync.stream())
}