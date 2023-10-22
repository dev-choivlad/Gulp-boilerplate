import gulp from "gulp";
import { plugins } from "../config/plugins.js";
import { filePaths } from "../config/paths.js";
import { isDev } from "../../gulpfile.js";

import webpack from "webpack-stream";
import { webpackConfig } from "../../webpack.config.js";

export const javaScript = () => {
	return gulp.src(filePaths.src.js, { sourceMap: isDev })
		.pipe(plugins.handleError("JAVA SCRIPT"))
		.pipe(webpack({
			config: webpackConfig(isDev)
		}))
		.pipe(gulp.dest(filePaths.build.js))
		.pipe(plugins.browserSync.stream());
}