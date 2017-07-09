var fs = require('fs');
var gulp = require('gulp');
var gutil = require('gulp-util');
var ftp = require('gulp-ftp');
var option = JSON.parse(fs.readFileSync('ftp.json', 'utf8'));
gulp.task('ftp', function () {
  gulp.src(['dist/**/*'])
  .pipe(ftp(option))
  .pipe(gutil.noop());
});
