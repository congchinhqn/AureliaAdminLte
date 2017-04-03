var gulp = require('gulp');
var del = require('del');

function clean() {
  return del(['__PUBLISH']);
}

function copyIndex() {
  return gulp.src(['index.html']).pipe(gulp.dest('__PUBLISH/'));
}

function copyBootstrap() {
  return gulp.src(['bootstrap/**/*']).pipe(gulp.dest('__PUBLISH/bootstrap'));
}

function copyDist() {
  return gulp.src(['dist/**/*']).pipe(gulp.dest('__PUBLISH/dist'));
}

function copyScripts() {

  return gulp.src(['scripts/**/*']).pipe(gulp.dest('__PUBLISH/scripts'));
}

function copyFontAwesome() {
  return gulp.src(['font-awesome/**/*']).pipe(gulp.dest('__PUBLISH/font-awesome'));
}

function pushToGhPages() {
  return gulp.src('__PUBLISH/**/*')
    .pipe(ghPages());
}

var deploy = gulp.series(clean, gulp.parallel(copyIndex, copyBootstrap, copyDist, copyScripts, copyFontAwesome), pushToGhPages);


gulp.task('deploy', deploy);
