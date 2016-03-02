const gulp = require("gulp"),
  express = require('gulp-express'),
  connect = require('gulp-connect'),
  livereload = require("gulp-livereload"),
  nodemon = require('gulp-nodemon'),
  less = require('gulp-less'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  sourcemap = require('gulp-sourcemaps');

// Static Server
gulp.task('connect', function() {
  connect.server({
    root: './client/',
    port: 8000,
    livereload: true
  });
});

// API Server
gulp.task('express', function() {
  express.run(['./server/api.js'], {}, false);
})

// Reload Server
gulp.task('livereload', [], function() {
  gulp.src('./client/' + '**/*.*')
    .pipe(connect.reload());
});

// Whatch Server
gulp.task('nodemon', function() {
  nodemon({
    script: './server/api.js',
    env: {
      'NODE_ENV': 'development'
    }
  })
})

// Watch Client
gulp.task('watch', function() {
  gulp.watch('./client/' + '**/*.*', ['less', 'livereload']);
})

// Less Processor
gulp.task('less', function() {
  return gulp.src('./client/styles/lesses/' + 'index.less')
    .pipe(less())
    .pipe(gulp.dest('./client/styles/'));
});

// Concat Scripts
gulp.task('concat', function() {
  return gulp.src('./client/scripts/**/*.js')
    .pipe(sourcemap.init())
    .pipe(concat('bundle.js'))
    .pipe(sourcemap.write('./'))
    .pipe(gulp.dest('./client/scripts/build/'));
});

// Compress Scripts
gulp.task('uglify', function() {
  return gulp.src('./client/scripts/bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('./client/scripts/build/'));
});

/* gulp */
gulp.task('default', ['express', 'less', 'connect', 'watch']);
/* gulp client */
gulp.task('client', ['less', 'connect', 'watch']);
/* gulp server */
gulp.task('server', ['nodemon']);
/* gulp build */
gulp.task('build', ['concat', 'uglify']);
