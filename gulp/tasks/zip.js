import gulp from "gulp";
import { plugins } from "../config/plugins.js";
import { filePaths } from "../config/paths.js";

import { deleteAsync } from "del";
import zipPlugin from "gulp-zip";

export const zip = () => {
	deleteAsync(`./${filePaths.projectDirName}.zip`);

	return gulp.src(`${filePaths.buildFolder}/**/*.*`, {})
		.pipe(plugins.handleError("ZIP"))
		.pipe(zipPlugin(`${filePaths.projectDirName}.zip`))
		.pipe(gulp.dest("./"))
}