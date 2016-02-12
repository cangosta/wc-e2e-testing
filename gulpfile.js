'use strict';

var del = require('del');
var gulp = require('gulp');
var traceur = require('gulp-traceur');
var dotenv = require('dotenv');
var gProtractor = require("gulp-protractor");
var protractor = gProtractor.protractor;
var webdriver_update = gProtractor.webdriver_update;

var TEST_DIR = 'test';
var BUILD_DIR = 'build';

var TESTS_JS_FILES = {
  source: [TEST_DIR + '/**/*.js'],
  build_destination: BUILD_DIR + '/test'
}

var TRACEUR_OPTIONS = {
  experimental: true,
  annotations: true,
  memberVariables: true,
  typeAssertions: true,
  typeAssertionModule: 'rtts_assert/rtts_assert',
  types: true,
  moduleName: true,
  modules: 'instantiate' // Systemjs
}

dotenv.load();

// Copy traceur file
// gulp.task('copy:traceur-runtime', function () {
//   return gulp.src('node_modules/traceur/bin/traceur-runtime.js')
//     .pipe(gulp.dest(BUILD_DIR));
// });

// Clean
gulp.task('clean', function () {
  return del(BUILD_DIR);
});

// Default
gulp.task('default', ['build']);

// Downloads the selenium webdriver
gulp.task('webdriver_update', webdriver_update);

// Execute task, but update webdriver if needed
gulp.task('test:e2e', ['webdriver_update'], function (cb) {
  return gulp.src([])
  	.pipe(protractor({
  		configFile: "protractor.conf.js"
  	})).on('error', function(e) {
        console.log(e)
    }).on('end', cb);
});

gulp.task('build', function() {
  return gulp.src(TESTS_JS_FILES.source)
  .pipe(traceur(TRACEUR_OPTIONS))
  .pipe(gulp.dest(TESTS_JS_FILES.build_destination));
});
