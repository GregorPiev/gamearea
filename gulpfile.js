var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnotate = require('gulp-ng-annotate');

gulp.task('js', function () {
    gulp.src(['appl/*.js', 'appl/**/*.js', '!appl/Recomendations/note.js'])
            .pipe(sourcemaps.init())
            .pipe(concat('application.js'))
            //.pipe(ngAnotate())
            //.pipe(uglify())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('.tmp/concat'));
});

gulp.task('watch:js', ['js'], function () {
    gulp.watch(['appl/*.js', 'appl/**/*.js', '!appl/Recomendations/note.js'], ['js']);
});