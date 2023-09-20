var gulp = require('gulp');
var fs = require("fs");
var rename = require("gulp-rename");
var mustache = require('gulp-mustache');

gulp.task('backstop_template_prod', function () { 
    return gulp.src('./templates/backstop_template_prod.mustache')
        .pipe(mustache('./pages/urls.json', {}, {}))
        .pipe(rename('./backstop_files/backstop_template_prod.json'))
        .pipe(gulp.dest('.'));
});

gulp.task('backstop_template_dev', function () { 
    return gulp.src('./templates/backstop_template_dev.mustache')
        .pipe(mustache('./pages/urls.json', {}, {}))
        .pipe(rename('./backstop_files/backstop_template_dev.json'))
        .pipe(gulp.dest('.'));
});