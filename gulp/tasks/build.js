var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence')

gulp.task('build', function(cb) {
  var tasks = ['clean', ['sass', 'browserify']];
  //if(process.env.RAILS_ENV === 'production') tasks.push('rev');
  if(process.env.RAILS_ENV != 'production') tasks.push('watch');
  tasks.push(cb);
  gulpSequence.apply(this, tasks);
});
