var gulp = require('gulp');
var watch = require('gulp-watch');
var webpack = require('webpack-stream');


gulp.task('webpack', function() {
  return gulp.src('app/js/scripts.js')
  .pipe(webpack(require ('./webpack.config.js')))
  .pipe(gulp.dest('app/js'));
});

gulp.task('watch', ['webpack'], function () {
    gulp.watch('app/js/scripts.js', ['webpack']);
});