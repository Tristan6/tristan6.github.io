var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

/* Task to compile less */
gulp.task('compile-less', function () {
    gulp.src('./src/style.less')
        .pipe(less())
        .pipe(gulp.dest('./public/css/'));
});
// /* Task to watch less changes */
gulp.task('watch-less', function () {
    gulp.watch('./src/**/*.less', gulp.series('compile-less'));
});

gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./public/"
        }
    });
    gulp.watch("./src/*.less").on("change", reload);
    gulp.watch("./public/*.html").on("change", reload);
});

/* Task when running `gulp` from terminal */
gulp.task('default', gulp.parallel('watch-less', 'serve'));


// const { src, dest, parallel } = require('gulp');
// const less = require('gulp-less');
// const minifyCSS = require('gulp-csso');

// function css() {
//     return src('./*.less')
//         .pipe(less())
//         .pipe(minifyCSS())
//         .pipe(dest('./css'))
// }

// exports.css = css;
// exports.default = parallel(css);