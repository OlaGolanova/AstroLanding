
// const gulp        = require('gulp');
// const browserSync = require('browser-sync');
// const sass = require('gulp-sass')(require('sass'));
// const rename = require("gulp-rename");
// const autoprefixer = require('gulp-autoprefixer');
// const cleanCSS = require('gulp-clean-css');

// // Static server
// gulp.task('server', function() {
//     browserSync.init({
//         server: {
//             baseDir: "src"
//         }
//     });
// });

// gulp.task('styles', function(){
//     return gulp.src("src/sass/*.+(scss|sass)")
//            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//            .pipe(rename({
//             prefix: "",
//             suffix: ".min"
//           }))
//           .pipe(autoprefixer({
// 			cascade: false
// 		}))
//            .pipe(cleanCSS({compatibility: 'ie8'}))
//            .pipe(gulp.dest("src/css"))
//            .pipe(browserSync.stream());
// });

// gulp.task('watch', function(){
//     gulp.watch("src/sass/*.+(scss|sass)", gulp.parallel("styles"));
//     gulp.watch("src/*.html", ).on("change", browserSync.reload)
// });

// gulp.task('default', gulp.parallel('watch', 'server', 'styles'));



const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const ghPages = require('gh-pages');

const path = require ('path');

function server(done){

    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
    done();

}

function style (done){
     gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            prefix: "",
            suffix: ".min"
            }))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
    done();
}

function scripts (done){
    gulp.src('src/js/**/*.js')
    .pipe(concat('index.js'))
    .pipe(gulp.dest('src/'))
    .pipe(browserSync.stream());
    done();
  }


function browserReload(done){
    browserSync.reload();
    done();
}

function watchFiles(done){
    gulp.watch("src/*.html", browserReload);
    gulp.watch("src/sass/**/*.+(scss|sass)", style);
    gulp.watch("src/js/**/*.js", scripts);
    done();

}



gulp.task('default', gulp.parallel(server, watchFiles));

function deploy(cb) {
    ghPages.publish(path.join(process.cwd(), './src'), cb);
}
exports.deploy = deploy;