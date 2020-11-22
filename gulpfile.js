const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const clean = require('gulp-clean');

const cssPath = './src/css/**/*.css';
const htmlPath = './src/pages/**/*.html';
const imgPath = './src/images/*';
const jsPath = require('./scripts.json');
 
function cleanDir() {
    return gulp.src('app', {read: false})
        .pipe(clean());
}

function style(){
    return gulp.src(cssPath)
            .pipe(sourcemaps.init())
            .pipe(concat('style.css'))
            .pipe(postcss([autoprefixer(), cssnano()]))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('./app/css'))
            .pipe(browserSync.stream());
}

function template(){
    return gulp.src(htmlPath)
            .pipe(gulp.dest('./app/'));
}

function imgTask(){
    return gulp.src(imgPath)
    .pipe(imagemin())
    .pipe(gulp.dest('./app/images'));

}

function audioTask(){
    return gulp.src('./src/audio/swiftly.mp3')
    .pipe(gulp.dest('app/audio'));
}

function jsTask(){
    return gulp.src(jsPath)
    // .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    // .pipe(terser())
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./app/js'));
}

function watch() {
    browserSync.init({
        server:{
            baseDir:'app'
        }
    });

    gulp.watch(cssPath, style);
    gulp.watch(htmlPath).on('change', browserSync.reload);
    gulp.watch(jsPath).on('change', browserSync.reload);
}

exports.jsTask = jsTask;
exports.default = gulp.series(cleanDir,gulp.parallel(style,template,jsTask, audioTask), watch);
exports.compile = gulp.series(gulp.parallel(style,template,jsTask, audioTask));
exports.copyHtml = template;
exports.imgTask = imgTask;
exports.clean = cleanDir;
exports.watch = watch;