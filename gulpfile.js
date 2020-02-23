const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

gulp.task('brows',()=>{
  return gulp.src('./sass/test.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('style'))
  .pipe(browserSync.stream());
})

gulp.task('typeS', ()=>{
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
  return gulp.src('autopre/test.css')
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




gulp.task('default', gulp.parallel('brows','typeS','sass','auto','minify-css'));
