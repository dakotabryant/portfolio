var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	sass = require('gulp-sass'),
	minify = require('gulp-minify');

gulp.task('serve', ['sass'], function() {
	browserSync.init({
		server: './',
	});

	gulp.watch(['sass/*.sass'], ['sass']);
	gulp.watch(['*.html', 'scripts/*.js']).on('change', browserSync.reload);
});

gulp.task('sass', function() {
	return gulp
		.src('sass/main.sass')
		.pipe(
			sass({
				style: 'compressed',
			})
		)
		.pipe(gulp.dest('./'))
		.pipe(browserSync.stream());
});

gulp.task('build', function() {
	gulp
		.src('sass/main.sass')
		.pipe(
			sass({
				style: 'compressed',
			})
		)
		.pipe(gulp.dest('./dist'));
	return gulp
		.src('scripts/main.js')
		.pipe(minify())
		.pipe(gulp.dest('./dist'));
});

gulp.task('default', ['serve']);
