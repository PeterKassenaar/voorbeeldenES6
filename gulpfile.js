// gulpfile.js
var gulp = require('gulp'),
	babel = require('gulp-babel'),
	plumber = require('gulp-plumber'),
	es6Path = 'es6/*.es6',
	compilePath = 'es6/compiled';

// 1. Define task for Babel
gulp.task('babel', function () {
	return gulp.src([
			es6Path
		])
		.pipe(plumber())
		.pipe(babel())
		.pipe(gulp.dest(compilePath + '/babel'));
});

// 2. When file changes, update compiled version
gulp.task('watch', function () {
	gulp.watch([es6Path], ['babel']);
});

// 3. Bootstrap: start default tasks
gulp.task('default', ['babel', 'watch']);
