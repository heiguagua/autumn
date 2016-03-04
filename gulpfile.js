const gulp = require("gulp"),
  express = require('gulp-express'),
  connect = require('gulp-connect'),
  livereload = require("gulp-livereload"),
  nodemon = require('gulp-nodemon'),
  less = require('gulp-less'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  sourcemap = require('gulp-sourcemaps');

/** gulp */
gulp.task('default', ['server', 'client']);

/** gulp client*/
gulp.task('client', function() {
  // Less Processor
  gulp.task('less', function() {
    gulp.src('./client/styles/lesses/' + 'index.less')
      .pipe(less())
      .pipe(gulp.dest('./client/styles/'));
  });
  // Static Server
  gulp.task('connect', ['less'], function() {
    connect.server({
      root: './client/',
      port: 8000,
      livereload: true
    });
  });
  // Reload Server
  gulp.task('livereload', ['less'], function() {
    gulp.src('./client/' + '**/*.*')
      .pipe(connect.reload());
  });
  // Watch Client
  gulp.watch('./client/' + '**/*.*', ['livereload']);
});

/** gulp server */
gulp.task('server', function() {
  // Whatch Server
  nodemon({
    script: './server/api.js',
    env: {
      'NODE_ENV': 'development'
    }
  })
});

/** gulp build */
gulp.task('build', function() {
  // Concat Scripts
  gulp.task('concat', function() {
    gulp.src('./client/scripts/**/*.js')
      .pipe(sourcemap.init())
      .pipe(concat('bundle.js'))
      .pipe(sourcemap.write('./'))
      .pipe(gulp.dest('./client/scripts/build/'));
  });
  // Compress Scripts
  gulp.task('uglify', function() {
    gulp.src('./client/scripts/bundle.js')
      .pipe(uglify())
      .pipe(gulp.dest('./client/scripts/build/'));
  });
});

/** gulp express */
gulp.task('express', function() {
  express.run(['./server/api.js'], {}, false);
})
