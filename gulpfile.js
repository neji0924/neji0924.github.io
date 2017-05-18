var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');

gulp.task('uglify:js', function(){
	return gulp.src('assets/js/*.js')
		.pipe(concat('app.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('assets/js'));
});

gulp.task('uglify:css', function(){
	return gulp.src('assets/css/*.css')
		.pipe(concat('style.min.css'))
		.pipe(uglifycss())
		.pipe(gulp.dest('assets/css'));
});

gulp.task('uglify', ['uglify:js', 'uglify:css'], function(){
	return gulp.src('src/index.html')
		.pipe(gulp.dest('dist'));
});