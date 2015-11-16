var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    shell = require('gulp-shell'),
    traceur = require('gulp-traceur'),
    webserver = require('gulp-webserver'),
    rimraf = require('gulp-rimraf'),
    ignore = require('gulp-ignore'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    minifyCSS = require('gulp-minify-css'),
    path = require('path');


// run development task
gulp.task('dev', ['watch', 'serve']);

// serve the build dir
gulp.task('serve', function () {
  gulp.src('build')
    .pipe(webserver({
      open: true,
      fallback: 'index.html'
    }));
});

// watch for changes and run the relevant task
gulp.task('watch', function () {
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/**/*.less', ['less']);
});

// move html
gulp.task('html', function () {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('build'))
});

//Build css from less, minify and move
gulp.task('less', function(){
  return gulp.src('src/less/style.less')
  .pipe(less())
  .pipe(minifyCSS())
  .pipe(gulp.dest('build/css'));
});


//Javascripts move to build and uglify
gulp.task('js', function () {
  return gulp.src(['src/**/*.js', '!src/js/**/*.js'])
    .pipe(rename({
      extname: ''
    }))
    .pipe(traceur({
      modules: 'instantiate',
      moduleName: true,
      annotations: true,
      types: true,
      memberVariables: true
    }))
    .pipe(rename({
      extname: '.js'
    }))
    //.pipe(uglify())
    .pipe(gulp.dest('build'));
});

gulp.task('build-vendor-js', function(){
  return gulp.src([
    'src/js/vendor/uikit/core/core.js',
    //Load more files if you need more vendors
  ])
  .pipe(concat('vendor.js'))
  //.pipe(uglify())
  .pipe(gulp.dest('build/js'));
});

gulp.task('build-main-js', function(){
  return gulp.src('src/js/*.js')
  .pipe(concat('main.js'))
  //.pipe(uglify())
  .pipe(gulp.dest('build/js'));
});

// move dependencies into build dir
gulp.task('dependencies', function () {
  return gulp.src([
    'node_modules/traceur/bin/traceur-runtime.js',
    'node_modules/systemjs/dist/system-csp-production.src.js',
    'node_modules/systemjs/dist/system.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/angular2/bundles/angular2.js',
    'node_modules/angular2/bundles/router.js',
    'src/js/vendor/jquery.js'
  ])
    .pipe(gulp.dest('build/lib'));
});

gulp.task('build-all-js', ['js', 'build-vendor-js', 'build-main-js', 'dependencies']);

gulp.task('fonts', function(){
  gulp.src('src/fonts/*')
  .pipe(gulp.dest('build/fonts'));
});

gulp.task('build', ['less', 'html', 'fonts', 'build-all-js']);

// clean the build
gulp.task('clean', function(){
  return gulp.src('build/*', {read:false})
  .pipe(rimraf());
});
