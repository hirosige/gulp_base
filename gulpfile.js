/**
 * Created by hirosige on 4/18/17.
 */

'use strict';

var gulp         = require('gulp');
var watch        = require('gulp-watch');
var less         = require('gulp-less');
var sass         = require('gulp-sass');
var plumber      = require('gulp-plumber');
var livereload   = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');
var uglify       = require('gulp-uglify');

gulp.task('watch', function(){
	livereload.listen();
	gulp.watch('src/**/*').on('change', livereload.changed);
});

//directories
var less_card = 'works/less/**/*.less';
var sass_card = 'works/sass/**/*.scss';
var css_dest  = 'html/css';

// sass task
gulp.task('sass', function() {
	gulp.src(sass_card)
		.pipe(plumber())
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(autoprefixer({
			browsers: ['last 2 version', 'iOS >= 8.1', 'Android >= 4.4'],
			cascade: false
		}))
		.pipe(gulp.dest(css_dest));
});

// sass task
gulp.task('less', function() {
	gulp.src(less_card)
		.pipe(plumber())
		.pipe(less({outputStyle: 'expanded'}))
		.pipe(autoprefixer({
			browsers: ['last 2 version', 'iOS >= 8.1', 'Android >= 4.4'],
			cascade: false
		}))
		.pipe(gulp.dest(css_dest));
});

// watch task
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch(less_card, ['less']);
	gulp.watch(sass_card, ['sass']);

	gulp.watch('html/**/*').on('change', livereload.changed);
});