import { plugins } from "../config/plugins.js";
import { filePaths } from "../config/paths.js";

export const bsync = (done) => {
	plugins.browserSync.init({
		server: {
			baseDir: filePaths.buildFolder,
		},
		notify: false,
		open: false,
		cors: true,
		ui: false,
		logLevel: "info",
		logPrefix: "DevServer",
		host: "localhost",
		port: 1234
	})
}