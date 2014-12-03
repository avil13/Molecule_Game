// "use strict";

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');
var prettify = require('gulp-jsbeautifier');


gulp.task('coffee', function() {
    gulp.src('./coffee/*.coffee')
        .pipe(sourcemaps.init())
        .pipe(coffee({
            bare: true
        }).on('error', gutil.log))
        .pipe(prettify({indentSize: 2}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./js/'));
});

// Запуск задач
gulp.task('default', ['coffee']);

// Задача на отслеживание изменений
gulp.task('watch', function() {
    gulp.watch('./coffee/*.coffee', ['coffee']);
});