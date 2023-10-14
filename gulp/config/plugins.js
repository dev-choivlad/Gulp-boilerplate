import replace from "gulp-replace";
import plumber from "gulp-plumber"; // errors handling
import notify from "gulp-notify"; // message in terminal
import browserSync from "browser-sync";
import newer from "gulp-newer"; // passing through only updated files
import ifPlagin from "gulp-if"; // conditional branching

const concatPathAndFileName = (path, files) => {
	return files.map((file) => `${path}/${file}`);
};

const handleError = (taskName) => {
	return plumber({
		errorHandler: notify.onError({
			title: taskName,
			message: "Error: <%= error.message %>",
		})
	})
};

export const plugins = {
	replace,
	plumber,
	notify,
	browserSync,
	newer,
	if: ifPlagin,
	concat: concatPathAndFileName,
	handleError,
}