import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = () => {
	return app.gulp.src(app.paths.src.img)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "IMAGES",
				message: "Error: <%= error.message %>"
			})
		))
		.pipe(app.plugins.newer(app.paths.build.img))
		.pipe(webp())
		.pipe(app.gulp.dest(app.paths.src.img))
		.pipe(app.gulp.src(app.paths.src.img))
		.pipe(app.plugins.newer(app.paths.build.img))
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{ removeViewBox: false}],
			interlaced: true,
			optimizationLevel: 3 // 0 --> 7
		}))
		.pipe(app.gulp.dest(app.paths.build.img))
		.pipe(app.gulp.src(app.paths.src.svg))
		.pipe(app.gulp.dest(app.paths.build.img))
		.pipe(app.plugins.browserSync.stream())
}