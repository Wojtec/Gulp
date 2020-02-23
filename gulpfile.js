let gulp = require('gulp');
let ts = require('gulp-typescript');
let tsProject = ts.createProject('tsconfig.json');
let sass = require('gulp-sass');

sass.compiler = require('node-sass');


gulp.task('default', ()=>{
  return tsProject.src()
  .pipe(tsProject())
  .js.pipe(gulp.dest('dist'));
});

gulp.task('sass', ()=>{
  return gulp.src('./sass/test.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist'));
});
