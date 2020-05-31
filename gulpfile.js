var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso'); // other options include clean css and css nano
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

/* Task to compile less */
gulp.task('compile-less', function () {
    gulp.src('./src/style.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('./css'));
});

// /* Task to watch less changes */
gulp.task('watch-less', function () {
    gulp.watch('./src/*.less', gulp.series('compile-less'));
});

gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./src/*.less").on("change", gulp.series('compile-less'));
    gulp.watch("./src/*.less").on("change", reload);
    gulp.watch("./*.html").on("change", reload);
});

/* Task when running `gulp` from terminal */
gulp.task('default', gulp.series('serve'));