'use strict';

var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var del = require('del');

var config = {
    js: 'src/**/*.js',
    dist: 'dist'
};

gulp.task('build', ['clean'], function () {
    return gulp.src(config.js)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.dist));
});

gulp.task('clean', function (cb) {
    var filesToDelete = [
        config.dist + '/**/*.js',
        config.dist + '/**/*.map'
    ];
    del(filesToDelete)
        .then(function () {
            cb();
        });
});

gulp.task('default', ['build']);