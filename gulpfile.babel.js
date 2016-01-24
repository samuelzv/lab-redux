const gulp    = require('gulp');
const notify  = require('gulp-notify');
const babel   = require('gulp-babel');
const eslint  = require('gulp-eslint');
const concat  = require('gulp-concat');
const newer   = require('gulp-newer');
const runSequence = require('run-sequence');
const rename = require('gulp-rename');
const livereload = require('gulp-livereload');
const plumber = require('gulp-plumber');
const less = require('gulp-less');
const path = require('path');
const autoprefixer = require('gulp-autoprefixer');

var jsVendorFiles = [
    'bower_components/angular/angular.js'
];

var cssVendorFiles = [
];

var lessFiles = [
    'source/client/app/todo.common.input.text/less/todo.common.input.text.less',
    'source/client/app/todo.common.input.text/less/todo.common.input.text.layout.less',
];

var jsConfigFiles = [
    'bower.json',
    'package.json'
];

var jsClientFiles = [
    'source/client/app/todo.common.input.text/todo.common.input.text.module.js',
    'source/client/app/todo.common.input.text/todo.common.input.text.directive.js',
    'source/client/app/todo.common.input/todo.common.input.module.js',
    'source/client/app/todo.common/todo.common.module.js',
    'source/client/app/app.js',
    'source/client/app/todo.common/todo.common.controller.js',

];

var htmlFiles = ['source/client/**/*.html'];

gulp.task('html', ()=> {
    return gulp.src(htmlFiles)
        .pipe(livereload());

});

gulp.task('less', () => {
    return gulp.src(lessFiles)
        .pipe(concat('app.css'))
        .pipe(plumber())
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('source/client/styles'))
        .pipe(livereload());
});

gulp.task('build-vendor-js-dev', (cb) => {
    return gulp.src(jsVendorFiles)
            .pipe(concat('app-dependencies.js'))
            .pipe(rename({suffix:'.min'}))
            .pipe(gulp.dest('source/client'))
});

gulp.task('build-vendor-css-dev', (cb) => {
    return gulp.src(cssVendorFiles)
        .pipe(concat('css-vendor.css'))
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('source/client'))
});

gulp.task('build-js-dev', (cb) => {
    return gulp.src(jsClientFiles)
        .pipe(concat('app.js'))
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(babel())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('source/client'))
        .pipe(livereload());
});

gulp.task('build-client-dev', (cb)=> {
    runSequence('build-vendor-js-dev','build-vendor-css-dev','build-js-dev', cb);
});

/*
gulp.task('default', (cb) => {
    runSequence('build-client-dev', 'less', 'watch', cb);
});
*/


gulp.task('watch', [], ()=> {

    gulp.watch(jsClientFiles, ['build-client-dev'])
    gulp.watch(lessFiles, ['less']);
    gulp.watch(htmlFiles, ['html']);

    livereload.listen();
});
