/*jslint node: true */
'use strict';
 
var gulp   = require('gulp');
var less = require('gulp-less');
var path = require('path');
var minifyCSS = require('gulp-minify-css');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
 
gulp.task('less', function () {
  gulp.src('./less/style.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css/'));
});
 
gulp.task('minify-css', function() {
  gulp.src('./public/css/style.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./public/css'));
});
 
gulp.task('minify-js', function () {
    gulp.src('js/*.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/js'));
});
 
gulp.task('compress', function() {
  gulp.src('public/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
});


gulp.task('listen', function () {
    gulp.watch('./less/*.less',['less']);
    gulp.watch('./public/css/*.css',['minify-css']);
    gulp.watch('./js/*.js',['minify-js']);
    gulp.watch('./public/js/*.js',['compress']);
});



gulp.task('default', 
[]
);