const gulp    = require('gulp');
const notify  = require('gulp-notify');
const babel   = require('gulp-babel');
const eslint  = require('gulp-eslint');
const concat  = require('gulp-concat');
const newer   = require('gulp-newer');
const runSequence = require('run-sequence');
const rename = require('gulp-rename');

var vendorFiles = [
    'bower_components/react/react.js',
    'node_modules/redux/dist/redux.js'
];

var jsClientFiles = [
    'source/client/components/TodoApp.jsx',
    'source/client/js/todos.js'
];


gulp.task('build-vendor-dev', (cb) => {
    return gulp.src(vendorFiles)
            .pipe(concat('app-dependencies.js'))
            .pipe(rename({suffix:'.min'}))
            .pipe(gulp.dest('source/client'))
});

gulp.task('build-js-dev', (cb) => {
    return gulp.src(jsClientFiles)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(babel())
        .pipe(concat('app.js'))
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('source/client'));
});



gulp.task('build-client-dev', (cb)=> {
    runSequence('build-vendor-dev', 'build-js-dev', cb);
});

gulp.task('default', (cb) => {
    runSequence('build-client-dev','watch', cb);
});


gulp.task('watch', [], ()=> {
    gulp.watch(jsClientFiles, ['build-client-dev']);
});
