var gulp = require('gulp');
var sass = require('gulp-sass');
var express = require('./server/app.js').app;

gulp.task('styles', function (){
  return gulp.src('./public/sass/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./public/styles'));
});

gulp.task('watch_styles', function (){
  gulp.watch('./public/sass/**/*.scss', ['styles']);
  gulp.watch('./public/*.html', notifyLiveReload);
  gulp.watch('./public/styles/*.css', notifyLiveReload);
});

gulp.task('express', function(){
  var app = express;
  app.use(require('connect-livereload')({port: 35729}));
  app.listen(4000);
});

function notifyLiveReload(event){
  var fileName = require('path').relative(__dirname, event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

var tinylr;
gulp.task('livereload', function(){
  tinylr = require('tiny-lr')();
  tinylr.listen(35729);
});

gulp.task('default', ['styles', 'watch_styles', 'express', 'livereload']);
