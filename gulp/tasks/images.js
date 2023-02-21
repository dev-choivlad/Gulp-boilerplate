import webp from "gulp-webp";
// TODO uncomment the code below when imagemin is fixed
//import imagemin, { gifsicle, mozjpeg, optipng, svgo } from "gulp-imagemin";

export const images = () => {
	return app.gulp.src(app.paths.src.img)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "IMAGES",
				message: "Error: <%= error.message %>"
			})
		))
		.pipe(app.plugins.newer(app.paths.build.img))
		.pipe(app.plugins.if(
			app.isBuild,
			webp()
		))
		.pipe(app.plugins.if(
			app.isBuild,
			app.gulp.dest(app.paths.build.img)
		))
		.pipe(app.plugins.if(
			app.isBuild,
			app.gulp.src(app.paths.src.img)
		))
		.pipe(app.plugins.if(
			app.isBuild,
			app.plugins.newer(app.paths.build.img)
		))
			// TODO remove images copy and comment below code when fix imagemin
		.pipe(app.gulp.dest(app.paths.build.img))
			/*.pipe(imagemin([
			 gifsicle({ interlaced: true }),
			 mozjpeg({ quality: 75, progressive: true }),
			 optipng({ optimizationLevel: 5 }),
			 ]))*/
		.pipe(app.gulp.dest(app.paths.build.img))
		.pipe(app.gulp.src(app.paths.src.svg))
		.pipe(app.gulp.dest(app.paths.build.img))
		.pipe(app.plugins.browserSync.stream())
}