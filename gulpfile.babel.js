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
const spawn = require('child_process').spawn;

var jsVendorFiles = [
    'bower_components/angular/angular.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js'
];

var cssVendorFiles = [
];

var lessFiles = [
    'source/client/app/todo.base/less/todo.base.less',
    'source/client/app/todo.mainpage/less/todo.mainpage.less',
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
    'source/client/app/todo.common/todo.common.controller.js',
    'source/client/app/todo.home/todo.home.module.js',
    'source/client/app/todo.home/todo.home.controller.js',
    'source/client/app/todo.home/todo.home.config.js',
    'source/client/app/todo.login/todo.login.module.js',
    'source/client/app/todo.login/todo.login.controller.js',
    'source/client/app/todo.login/todo.login.config.js',
    'source/client/app/app.js'

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

gulp.task('gulp-autoreload', function() {
    // Store current process if any
    var p;

    gulp.watch('gulpfile.babel.js', spawnChildren);
    // Comment the line below if you start your server by yourslef anywhere else
    spawnChildren();

    function spawnChildren(e) {
        if(p) {
            p.kill();
        }

        p = spawn('gulp', ['watch'], {stdio: 'inherit'});
    }
});

gulp.task('watch', [], ()=> {

    runSequence('build-client-dev', 'less', 'html', ()=> {
        console.log('hello.....');

        gulp.watch(jsClientFiles, ['build-client-dev'])
        gulp.watch(lessFiles, ['less']);
        gulp.watch(htmlFiles, ['html']);
        livereload.listen();
    });

});



