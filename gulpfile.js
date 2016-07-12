const gulp = require('gulp')
const eslint = require('gulp-eslint')

var jsfiles = ['user.js', 'config/**/*.js', 'csv/**/*.js', 'data/**/*.js', 'service/**/*.js', 'routes/**/*.js']

gulp.task('lint', function () {
  return gulp.src(jsfiles)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
})
