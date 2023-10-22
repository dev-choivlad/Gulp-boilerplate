import gulp from "gulp";
import { filePaths } from "../config/paths.js";
import { plugins} from "../config/plugins.js";

import svgSprite from "gulp-svg-sprite";

export const createSvgSprite = () => {
	return gulp.src(filePaths.src.svgicons, {})
		.pipe(plugins.handleError("SVG"))
		.pipe(
			svgSprite({
				mode: {
					stack: {
						sprite: "../icons/icons.svg",
						example: true, // creating a page with a list of svg icons
					}
				}
			})
	)
		.pipe(gulp.dest(filePaths.build.images));
}