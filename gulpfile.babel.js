const gulp    = require('gulp');
const notify  = require('gulp-notify');
const babel   = require('gulp-babel');
const eslint  = require('gulp-eslint');
const concat  = require('gulp-concat');
const newer   = require('gulp-newer');

//TODO move html to source/client
var appFiles = {
    html: [
        'source/client/index.html'
    ],
    source: {
        configuration: [
            'package.json'
        ],
        client: [
            'source/client/components/TodoApp.jsx',
            'source/client/js/todos.js'
        ],
        server: [
            'source/server/app.js'
        ]
    },
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


var lintFiles = (source) => {
     return gulp.src(source)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
};


var copyFiles = (source, destination) => {
    return gulp.src(source)
        .pipe(newer(destination))
        .pipe(gulp.dest(destination));
};

gulp.task('lint-client', () => {
    return lintFiles(appFiles.source.client);
});

gulp.task('lint-server', () => {
    return lintFiles(appFiles.source.server);
});

gulp.task('copy-files', ['copy-configuration', 'copy-html','copy-vendor'], ()=> {
});

gulp.task('copy-vendor', ()=> {
    return copyFiles(appFiles.vendor, 'distro/client/vendor');
});

gulp.task('copy-html', ()=> {
    return copyFiles(appFiles.html, 'distro/client');
});

gulp.task('copy-configuration', ()=> {
    return copyFiles(appFiles.source.configuration, 'distro');
});

gulp.task('concat-client', ['lint-client'], () => {
    return gulp.src(appFiles.source.client)
        .pipe(babel())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('distro/client/js'));
});

gulp.task('translate-server', ['lint-server'], () => {
    return gulp.src(appFiles.source.server)
        .pipe(babel())
        .pipe(gulp.dest('distro'));
});


gulp.task('build-client', ['copy-files', 'concat-client'], ()=> {
});

gulp.task('build-server', ['translate-server'], ()=> {
});

gulp.task('default',['build-client', 'build-server'], () => {
});


gulp.task('watch', [], ()=> {
    gulp.watch(appFiles.source.server,['build-server']);

    //TODO watch html files
    gulp.watch(appFiles.source.client,['build-client']);

    //

});
