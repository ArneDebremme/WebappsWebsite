/**
 * Created by BREMME on 4/12/15.
 */
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');

var plugins = gulpLoadPlugins();

var testFolder = './test'

gulp.task('runTests', function(){
    return gulp.src(testFolder + '/*.js').pipe(plugins.mocha());
})