import gulp from "gulp";
import { plugins } from "../config/plugins.js";
import { filePaths } from "../config/paths.js";

import vinylFtp from "vinyl-ftp";
import util from "gulp-util";
import { configFTP } from "../config/ftp.js"

export const ftp = () => {
	configFTP.log = util.log;
	const ftpConnect = vinylFtp.create(configFTP);

	return gulp.src(`${filePaths.buildFolder}/**/*.*`, {})
		.pipe(plugins.handleError("FTP"))
		.pipe(ftpConnect.dest(`/${filePaths.ftp}/${filePaths.projectDirName}`))
}