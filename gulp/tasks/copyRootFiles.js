import gulp from "gulp";
import { plugins } from "../config/plugins.js";
import { filePaths } from "../config/paths.js";

export const copyRootFiles = () => {
	const config = {
		dot: true,
		allowEmpty: true,
	}

	// adding necessary files to the root of the project
	const files = ["favicon.ico", ".htaccess"];

	return gulp.src(plugins.concat(filePaths.srcFolder, files), config)
		.pipe(gulp.dest(filePaths.buildFolder));
}