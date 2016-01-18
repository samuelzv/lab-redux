const gulp    = require('gulp');
const notify  = require('gulp-notify');
const babel   = require('gulp-babel');
const eslint  = require('gulp-eslint');
const concat  = require('gulp-concat');
const newer   = require('gulp-newer');


var appFiles = {
    html: [
        'source/index.html'
    ],
    source: [
        'source/components/TodoApp.jsx',
        'source/js/todos.js'
    ],
    vendor: [
        'bower_components/react/react.js',
        'node_modules/redux/dist/redux.js'
    ],
};


var onError = (error) => {
    console.log('****Start Error****');
    console.log(error);
    console.log('****End Error****');
};

gulp.task('lint', () => {
    return gulp.src(appFiles.source)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
});

var copyFiles = (source, destination) => {
    return gulp.src(source)
        .pipe(newer(destination))
        .pipe(gulp.dest(destination));
};

gulp.task('copy-files', ['copy-html','copy-vendor'], ()=> {
});

gulp.task('copy-vendor', ()=> {
    return copyFiles(appFiles.vendor, 'distro/vendor');
});

gulp.task('copy-html', ()=> {
    return copyFiles(appFiles.html, 'distro');
});

gulp.task('concat', ['lint'], () => {
    return gulp.src(appFiles.source)
        .pipe(babel())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('distro/js'));
});


gulp.task('build', ['copy-files', 'concat'], ()=> {
});

gulp.task('default',['lint'], () => {
});