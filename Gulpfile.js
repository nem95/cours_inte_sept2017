"use strict";

let gulp = require("gulp");
let p = require('gulp-load-plugins')();

const production = !!p.util.env.prod

gulp.task('script', function () {
  return gulp.src('./js/*.js')
    .pipe(p.concat('all.js'))
    .pipe(p.uglify())
    .pipe(gulp.dest('./js/dist'));
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(p.sourcemaps.init())
    .pipe(p.sass().on('error', p.sass.logError))
    .pipe(p.sourcemaps.write('./'))
    .pipe(p.if(production, p.cleanCss({debug: true}, function(details) {
       console.log(details.name + ': ' + details.stats.originalSize);
       console.log(details.name + ': ' + details.stats.minifiedSize);
     })))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', ['sass', 'script'], function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./js/**/*.js', ['script']);
});

gulp.task("default", ['sass', 'script']);
