const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
  return gulp.src('sass/_common.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('css'));
}

function watchSass() {
  gulp.watch('sass/common.scss', compileSass);
}

exports.default = watchSass;