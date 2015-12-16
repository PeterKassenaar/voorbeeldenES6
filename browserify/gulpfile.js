var gulp = require('gulp'),
	babel = require('gulp-babel'),
	es6Path = 'es6/*.es6',
	compilePath = 'js';

gulp.task('babel', function () {
	return gulp.src([es6Path])
		.pipe(babel())
		.pipe(gulp.dest(compilePath));
});
gulp.task('watch', function(){
	gulp.watch([es6Path], ['babel']);
});

gulp.task('default', ['babel', 'watch']);
