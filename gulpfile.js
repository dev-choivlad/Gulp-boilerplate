import gulp from "gulp";
import { paths } from "./gulp/config/paths.js";

// Shared plugins import
import { plugins } from "./gulp/config/plugins.js";

global.app = {
	gulp,
	paths,
	plugins,
}

// Tasks import
import { copy } from "./gulp/tasks/copy.js";
import { clean } from "./gulp/tasks/clean.js";
import { html } from "./gulp/tasks/html.js";
import { bsync } from "./gulp/tasks/bsync.js";
import { scss } from "./gulp/tasks/scss.js";

// Watchers
function watcher() {
	gulp.watch(paths.watch.files, copy);
	gulp.watch(paths.watch.html, html);
	gulp.watch(paths.watch.scss, scss);
}

// Main tasks
const mainTasks = gulp.parallel(copy, html, scss)

// Tasks running flow
const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, bsync))

gulp.task("default", dev)