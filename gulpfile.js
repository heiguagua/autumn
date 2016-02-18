var gulp = require('gulp');
 var gls = require('gulp-live-server');

gulp.task('start', function() {
  var server = gls.new('./server/app.js');
  server.start();

});
