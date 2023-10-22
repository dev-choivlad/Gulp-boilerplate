import gulp from "gulp";
import { plugins } from "./gulp/config/plugins.js";
import { filePaths } from "./gulp/config/paths.js";

// Tasks import
import { copy } from "./gulp/tasks/copy.js";
import { copyRootFiles } from "./gulp/tasks/copyRootFiles.js";
import { clean } from "./gulp/tasks/clean.js";
import { html } from "./gulp/tasks/html.js";
import { bsync } from "./gulp/tasks/bsync.js";
import { scss } from "./gulp/tasks/scss.js";
import { javaScript } from "./gulp/tasks/script.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontStyle } from "./gulp/tasks/fonts.js";
import { svgsprite } from "./gulp/tasks/svgsprite.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

const isBuild = process.argv.includes("--build");
const isDev = !process.argv.includes("--build");

// Watchers
function watcher() {
	gulp.watch(filePaths.watch.static, copy);
	gulp.watch(filePaths.watch.html, html);
	gulp.watch(filePaths.watch.scss, scss);
	gulp.watch(filePaths.watch.js, javaScript);
	gulp.watch(filePaths.watch.img, images);
}

// Sequential fonts processing
const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle);

// Parallel tasks in development mode
const devTasks = gulp.parallel(
	copy,
	copyRootFiles,
	html,
	scss,
	javaScript,
	images
)

// Main tasks
const mainTasks = gulp.series(
	fonts,
	devTasks
);

// Tasks running flow
const dev = gulp.series(
	clean,
	mainTasks,
	gulp.parallel(watcher, bsync)
);

const build = gulp.series(
	clean, mainTasks
)

const deployZIP = gulp.series(
	clean,
	mainTasks,
	zip
);

const deployFTP = gulp.series(
	clean,
	mainTasks,
	ftp
)

gulp.task("default", dev)

export { dev, build, deployZIP, deployFTP, svgsprite, isBuild, isDev }