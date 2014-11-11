/*jslint node: true */
'use strict';
 
var gulp   = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');

 
gulp.task('styles', function () {
  gulp.src('./less/style.less')
    .pipe(less({compress: true}))
    .pipe(autoprefixer({ browsers: ['ie >= 9']}))
    .pipe(gulp.dest('./public/css/'));
});
 
 
gulp.task('scripts', function () {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/js'));
});
 
gulp.task('listen', function () {
    gulp.watch('./less/*.less',['styles']);
    gulp.watch('./js/*.js',['scripts']);
});



gulp.task('default', 
[]
);