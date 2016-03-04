const gulp = require("gulp"),
  express = require('gulp-express'),
  connect = require('gulp-connect'),
  livereload = require("gulp-livereload"),
  nodemon = require('gulp-nodemon'),
  less = require('gulp-less'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  sourcemap = require('gulp-sourcemaps');

/**------------------ gulp default ------------------*/
gulp.task('default', ['nodemon', 'less', 'connect', 'watch']);


/**------------------ gulp client ------------------*/
gulp.task('client', ['less', 'connect', 'watch']);
// Less Processor
gulp.task('less', function() {
  return gulp.src('./client/styles/lesses/' + 'index.less')
    .pipe(less())
    .pipe(gulp.dest('./client/styles/'));
});
// Static Server
gulp.task('connect', function() {
  connect.server({
    root: './client/',
    port: 8000,
    livereload: true
  });
});
// Reload Static Server
gulp.task('livereload', ['less'], function() {
  gulp.src('./client/**/*.*')
    .pipe(connect.reload());
});
// Watch Client
gulp.task('watch', function() {
  gulp.watch('./client/**/*.*', ['livereload']);
})


/**------------------ gulp server ------------------*/
gulp.task('server', ['nodemon']);
// API Server
gulp.task('express', function() {
  express.run(['./server/api.js'], {}, false);
})
// Whatch Server
gulp.task('nodemon', function() {
  nodemon({
    script: './server/api.js',
    env: {
      'NODE_ENV': 'development'
    }
  })
})


/**------------------ gulp build ------------------*/
gulp.task('build', ['concat', 'uglify']);
// Concat Scripts
gulp.task('concat', function() {
  gulp.src('./client/scripts/**/*.js')
    .pipe(sourcemap.init())
    .pipe(concat('bundle.js'))
    .pipe(sourcemap.write('./'))
    .pipe(gulp.dest('./build/'));
});
// Compress Scripts
gulp.task('uglify', function() {
  gulp.src('./build/bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/'));
});
