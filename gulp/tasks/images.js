import gulp from "gulp";
import { plugins } from "../config/plugins.js";
import { filePaths } from "../config/paths.js";
import { isBuild } from "../../gulpfile";

import webp from "gulp-webp"
import imagemin from "gulp-imagemin"

export const images = () => {
	return gulp.src(filePaths.src.img)
		.pipe(plugins.handleError("IMAGES"))
		.pipe(plugins.newer(filePaths.build.img))
		.pipe(plugins.if(isBuild, webp()))
		.pipe(plugins.if(isBuild, gulp.dest(filePaths.build.img)))
		.pipe(plugins.if(isBuild, gulp.src(filePaths.src.img)))
		.pipe(plugins.if(isBuild, plugins.newer(filePaths.build.img)))
		.pipe(
			plugins.if(
				isBuild,
				imagemin({
					progressive: true,
					svgoPlugins: [{ removeViewBox: false}],
					interlaced: true,
					optimizationLevel: 3, // from 0 to 7
				})
			)
		)
		.pipe(gulp.dest(filePaths.build.img))
		.pipe(gulp.src(filePaths.src.svg))
		.pipe(gulp.dest(filePaths.build.img))
		.pipe(plugins.browserSync.stream());
}
