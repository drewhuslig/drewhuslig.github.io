const gulp = require('gulp'),
 jshint = require('gulp-jshint'),
 jscs = require('gulp-jscs'),
 nodemon = require('gulp-nodemon');

const jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', () => {
    gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});

gulp.task('inject', () => {
    const wiredep = require('wiredep').stream;
    const inject = require('gulp-inject');

    const injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js'],  {read: false});

    const injectOptions = {
        ignorePath: '/public'
    };

    const options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    };

    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});

gulp.task('serve', ['style', 'inject'], () => {
    var options = {
        script: 'server.js',
        delayTime: 1,
        env: {
            'PORT': 3000
        },
        watch: jsFiles
    };

    return nodemon(options)
        .on('restart', () => {
            console.log('Restarting....');
        });
});