const gulp = require("gulp"),
  livereload = require("gulp-livereload"),
  connect = require('gulp-connect'),
  less = require('gulp-less'),
  express = require('gulp-express');

// Static Server
gulp.task('connect', function() {
  connect.server({
    root: './client/',
    port: 8000,
    livereload: true
  });
});

// API Server
gulp.task('express', function(){
  express.run(['./server/api.js'], {}, false);
})

// Reload Server
gulp.task('livereload',[],function() {
  gulp.src('./client/' + '**/*.*')
  .pipe(connect.reload());
});

// Less Processor
gulp.task('less', function () {
  return gulp.src('./client/styles/lesses/' + 'index.less')
  .pipe(less())
  .pipe(gulp.dest('./client/styles/'));
});

// Watch
gulp.task('watch', function() {
  gulp.watch('./client/' + '**/*.*',['less', 'livereload']);
})

/* gulp */
gulp.task('default', ['express', 'less', 'connect', 'watch']);
/* gulp client */
gulp.task('client', ['less', 'connect', 'watch']);
/* gulp server */
gulp.task('server', ['express']);
