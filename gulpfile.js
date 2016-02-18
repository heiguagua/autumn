var gulp = require("gulp"),
    livereload = require("gulp-livereload"),
    connect = require('gulp-connect');

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

// Watch
gulp.task('watch', function() {
    gulp.watch('./client/' + '**/*.*',['livereload']);
})

// Make defulat task
gulp.task('default', ['connect', 'watch']);
