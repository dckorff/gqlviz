var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require("webpack");



paths = {};

paths.typescript_in = './assets/app/**/*.ts';
paths.typescript_out = './public/assets/build';

//paths.webpack_entry = paths.typescript_out + '/app.js';
paths.webpack_entry = paths.typescript_out + '/main.js';
paths.webpack_output = paths.typescript_out + '/app-bundle.js';


gulp.task('typescript', function () {

	var tsconfig = require('./tsconfig.json');

	return gulp.src(paths.typescript_in)
		.pipe(ts( tsconfig.compilerOptions ))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(paths.typescript_out));

});


// This task has a dependency on the 'typescript' task which will cause it to run first before the webpack task
gulp.task("webpack", ['typescript'], function () {
    webpack({
        entry: paths.webpack_entry,
        output: {
            filename: paths.webpack_output
        }
    }, function (err, stats) {
        if (err) {
            console.log("Webpack error:");
            console.log(err);
        }
    });
});

gulp.task("build-dev", ["webpack"], function() {
    console.log("---webpack complete---");
});

gulp.task('default', function(){
    gulp.start('webpack');    
});

gulp.task('watch', function () {

    //gulp.start('webpack');
    gulp.start("build-dev");
    

	gulp.watch(paths.typescript_in, ['build-dev']);

});