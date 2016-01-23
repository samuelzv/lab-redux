const gulp    = require('gulp');
const notify  = require('gulp-notify');
const babel   = require('gulp-babel');
const eslint  = require('gulp-eslint');
const concat  = require('gulp-concat');
const newer   = require('gulp-newer');
const runSequence = require('run-sequence');
const rename = require('gulp-rename');
const livereload = require('gulp-livereload');

var vendorFiles = [
    'bower_components/angular/angular.js'
];

var jsClientFiles = [
    'source/client/app/app.js'
];


gulp.task('build-vendor-dev', (cb) => {
    return gulp.src(vendorFiles)
            .pipe(concat('app-dependencies.js'))
            .pipe(rename({suffix:'.min'}))
            .pipe(gulp.dest('source/client'))
            .pipe(livereload());
});

gulp.task('build-js-dev', (cb) => {
    return gulp.src(jsClientFiles)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(babel())
        .pipe(concat('app.js'))
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('source/client'))
        .pipe(livereload());
});

gulp.task('build-client-dev', (cb)=> {
    runSequence('build-vendor-dev', 'build-js-dev', cb);
});

gulp.task('default', (cb) => {
    runSequence('build-client-dev','watch', cb);
});


gulp.task('watch', [], ()=> {
    livereload.listen();
    gulp.watch(jsClientFiles, ['build-client-dev']);
});
