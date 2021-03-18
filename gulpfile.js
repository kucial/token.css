var gulp = require('gulp');
var sass = require('gulp-dart-sass');
var browserSync = require('browser-sync').create();
 
gulp.task('sass', function () {
  return gulp.src('./sass/token.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});
 
// gulp.task('sass:watch', function () {
//   livereload.listen();
//   gulp.watch('./sass/**/*.scss', gulp.series('sass'));
// });

gulp.task('serve', gulp.series('sass', function() {
  browserSync.init({
    server: './'
  })
  gulp.watch('./sass/**/*.scss', gulp.series('sass'));
  gulp.watch("./*.html").on('change', browserSync.reload);
}));