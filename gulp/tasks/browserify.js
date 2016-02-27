var _            = require('lodash');
var gutil        = require('gulp-util');
var gulp         = require('gulp');
var browserify   = require('browserify');
var source       = require('vinyl-source-stream');
var handleErrors = require('../util/handleErrors');

var publicAssets = "./public/assets";
var sourceFiles  = "./gulp/assets";

var b = browserify({
  entries: (sourceFiles + '/javascripts/global.js'),
  extensions: ['.js', '.jsx'],
  cache: {},
  packageCache: {},
  debug: true
})

var bundle = function() {
  gutil.log(gutil.colors.blue('Bundling!'));

  return b
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .on('error', handleErrors)
    .pipe(source('global.js'))
    .pipe(gulp.dest((publicAssets + '/javascripts')));
}

if(process.env.RAILS_ENV != 'production'){
    b.plugin('watchify')
    b.on('update', bundle)
    b.on('time', function (time) { gutil.log(gutil.colors.green('Finished bundling in', time)); })
}

gulp.task('browserify', bundle);

module.exports = bundle;
