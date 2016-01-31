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
const browserify = require('browserify');
const buffer     = require('vinyl-buffer');
const transform = require('vinyl-transform');
const source     = require('vinyl-source-stream');

var jsVendorFiles = [
    'bower_components/angular/angular.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js'
];


gulp.task('browserify',['babel'], function () {
  return browserify([__dirname + '/temp/es5/app.js']).bundle()
    .pipe(source('app.min.js'))
    .pipe(buffer())
    .pipe(gulp.dest(__dirname + '/source/build/js'));
});

gulp.task('html', ()=> {
    return gulp.src('source/client/**/*.html')
        .pipe(gulp.dest('source/build'));
        //.pipe(livereload());
});

gulp.task('assets', ()=> {
    return gulp.src('source/client/assets/**/*.*')
        .pipe(gulp.dest('source/build/assets'));
});

gulp.task('less', () => {
    return gulp.src('source/client/**/*.less')
        .pipe(concat('app.css'))
        .pipe(plumber())
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('source/build'));
        //.pipe(livereload());
});

gulp.task('vendor', (cb) => {
    return gulp.src(jsVendorFiles)
        .pipe(concat('app-dependencies.js'))
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('source/build/js'))
});


gulp.task('babel', (cb) => {
    return gulp.src('source/client/js/**/*.js')
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(babel())
        .pipe(gulp.dest('temp/es5'));
});


gulp.task('build-client-dev', (cb)=> {
    runSequence('build-vendor-js-dev','build-vendor-css-dev','build-js-dev', cb);
});


gulp.task('watch', [], ()=> {
    runSequence('browserify', 'vendor','less', 'html', 'assets', ()=> {
        gulp.watch('source/client/js/**/*.js', ['browserify']);
        gulp.watch('source/client/**/*.less', ['less']);
        gulp.watch('source/client/**/*.html', ['html']);
        livereload.listen();
    });
});


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

