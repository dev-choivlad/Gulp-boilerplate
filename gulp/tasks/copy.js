import gulp from "gulp";
import { filePaths } from "../config/paths.js";

export const copy = () => {
	return gulp.src(filePaths.src.static)
		.pipe(gulp.dest(filePaths.build.static))
}