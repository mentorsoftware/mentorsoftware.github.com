var gulp = require('gulp');
var gutil = require('gulp-util');
var less = require('gulp-less');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('less', function() {
    gulp.src('src/less/app.less')
        .pipe(sourcemaps.init())
        .pipe(less({
            paths: [path.join(__dirname, 'src/less', 'includes')]
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css'))
});
