var gulp = require('gulp');
var zip = require('gulp-zip');
var shell = require('gulp-shell');

gulp.task('default', function() {
	return gulp.src('app/*')
		.pipe(zip('wmii-player.nw'))
		.pipe(gulp.dest('compiled'));
});

gulp.task('run',['default'], shell.task('nw compiled/wmii-player.nw'));