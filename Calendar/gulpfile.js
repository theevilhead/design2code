"use strict";

var gulp = require("gulp"),
    sass = require("gulp-sass"),
    uglifycss = require("gulp-uglifycss"),
    autoprefixer = require("gulp-autoprefixer");

sass.compiler = require("node-sass");

// Complie sass into src folder

gulp.task("sass", function() {
    return gulp
        .src("./src/assets/styles/app.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./src/assets/styles/"));
});

// Watch for style files inside src folder and run `sass` task

gulp.task("sass:watch", function() {
    gulp.watch("./src/assets/styles/**/*", ["sass"]);
});

// Final build that generates css, auto prefixes and uglifies the file into src folder

gulp.task("dist", function() {
    return gulp
        .src("./src/assets/styles/app.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(
            autoprefixer({
                browsers: ["last 4 versions"],
                cascade: true
            })
        )
        .pipe(
            uglifycss({
                maxLineLen: 100,
                uglyComments: true
            })
        )
        .pipe(gulp.dest("./src/assets/styles/"));
});
