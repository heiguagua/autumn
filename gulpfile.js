const gulp = require("gulp"),
  livereload = require("gulp-livereload"),
  connect = require('gulp-connect');
  less = require('gulp-less');

//Static Server
gulp.task('connect', function() {
  connect.server({
    root: './client/',
    port: 5000,
    livereload: true
  });
});

//Reload Server
gulp.task('livereload',[],function() {
  gulp.src('./client/' + '**/*.*')
  .pipe(connect.reload());
});

// Less Processor
gulp.task('less', function () {
  return gulp.src('./client/styles/' + '**/*.less')
  .pipe(less())
  .pipe(gulp.dest('./client/styles/'));
});

// Watch
gulp.task('watch', function() {
  gulp.watch('./client/' + '**/*.*',['less', 'livereload']);
})

// Make defulat task
gulp.task('default', ['connect', 'watch']);
