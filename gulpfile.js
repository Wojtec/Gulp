let gulp = require('gulp');
let ts = require('gulp-typescript');
let tsProject = ts.createProject('tsconfig.json');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let cleanCss = require('gulp-clean-css');
let rename = require('gulp-rename');

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

gulp.task('auto', () =>{
  return gulp.src('dist/test.css')
  .pipe(autoprefixer({
      cascade: false
  }))
  .pipe(gulp.dest('autopre'))

});

gulp.task('minify-css', ()=>{
  return gulp.src('autopre/test.css')
  .pipe(cleanCss({compability: 'ie8'}))
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('dist'));
})
