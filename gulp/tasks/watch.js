/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp   = require('gulp');
var gutil   = require('gulp-util');
var config = require('../config');
var watch  = require('gulp-watch');

gulp.task('watch' , function(callback) {
  gutil.log('Watching!', 'sass files')
  watch(config.sass.src, function() { gulp.start('sass'); });
  // watch(config.js.src, function() { gulp.start('clean', 'browserify'); });
  // Watchify will watch and recompile our JS, so no need to gulp.watch it
});
