var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default' , function(){

    return gulp.src('./assets/styles/site.scss')
    .pipe(sass())
    .pipe(gulp.dest('./assets/styles/'))
    
})

gulp.task('watch',function(){
    gulp.watch('./assets/styles/*.scss', ['default']);
})