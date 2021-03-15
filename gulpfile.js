var gulp = require('gulp');
var sass = require('gulp-dart-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/token.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});