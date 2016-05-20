
'use strict';
var gulp = require('gulp'), watch = require('gulp-watch');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
const input = 'src/css/**/*.scss';
const output = 'dest/css';


gulp.task('sass', function () {
    return sass(input)
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(output));
});

gulp.task('workflow', function () {
    sass(input)
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(sourcemaps.write('./'))

        .pipe(gulp.dest(output))
});

// Watch
gulp.task('watch', function() {
    gulp.watch(input, ['workflow']);
    //gulp.watch('src/img/**/*', ['images']);
});

gulp.task('default', ['watch'], function () {
    gulp.start('workflow');
});