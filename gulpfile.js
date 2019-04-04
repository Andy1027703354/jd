var gulp = require('gulp');
const css = require('gulp-minify-css');

gulp.task('minicss', function() {
  // 将你的默认的任务代码放在这
      gulp.src('app/css/*.css')
    .pipe(css())
    .pipe(gulp.dest('dist/css/'));
});