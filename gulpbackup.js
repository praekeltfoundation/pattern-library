gulp.task('release', funciton() {
  return gulp.src(config.versioning.files)
        .pipe(bump({
          type: gulp.env.type || 'patch'
        .pipe(gulp.dest('./'))
        .pipe(git.commit('Release a' + gulp.env.type + '-update'))
        .pipe(filter('package.json')) //Read only one file to get version number
        .pipe(tagversion()) //Tag version
      }));
});

//Wrote CSS task runner and bundling with sourcemaps
//To do: Make sure this loads for production(with no sourcemaps with minified and extended css)
//To do: Make sure this loads for development(sourcempas and minified)
//PRODUCTION HANDLING
var sassDest = {
  production: path.resolve(paths().source.cssProd),
  development: path.resolve(paths().source.cssDev)
}

function styles(env) {
  var source = path.resolve(paths().source.css, '**/*.scss');
  var isDev = env === development;

    if (isDev) source = source
    .pipe(sourcemaps.init())

    source = source
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSSMinify())

    if (isDev) source = source
      .pipe(sourcemaps.write('/maps'))
      return source
      .pipe(gulp.dest(sassDest[env]))
      .pipe(browserSync.stream());
}

gulp.task('pl-sass:production', function() {
  return styles(production);
});

gulp.task('pl-sass:development', function() {
  return styles(development);
});
