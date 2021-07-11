
const register = require('babel-register');

const gulp = require('gulp');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');

gulp.task('test', () => {
  gulp.src('./test/**/*.ts')
  .pipe(mocha());
});
