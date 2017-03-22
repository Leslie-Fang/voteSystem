var gulp = require('gulp');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var exec = require('child_process').exec;
var server = require( 'gulp-develop-server');


var Paths = {
    routes_src:'routes/*.js',
    routes_dest:'build/routes',
    html_src:'views/**',
    webpack_config:'./webpack.config.js',
    gulp_config:'./gulpfile.js',
    react_src:'public/javascript/react/**/*.js',
    react_dest:'public/javascript/babel',
    database_api_src:'databases/*.js',
    css_src:'public/css/*.css'
};

gulp.task('routes',function(){
    gulp.src(Paths.routes_src)
        .pipe(uglify())
        .pipe(gulp.dest(Paths.routes_dest));
});

gulp.task('babel',function(){
    gulp.src(Paths.react_src)
        .pipe(babel())
        .pipe(gulp.dest(Paths.react_dest));
});

gulp.task('webpack', function (cb) {
    exec('webpack', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});
gulp.task( 'server:start', function() {
    server.listen( { path: './app.js' } );
});

// run server
gulp.task( 'server.restart', function() {
    server.restart();
});

gulp.task('cleandata', function (cb) {
    exec('node cleandata.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('watch',function(){
    gulp.watch(
        [Paths.routes_src,Paths.html_src,Paths.react_src,Paths.database_api_src,Paths.gulp_config,Paths.webpack_config],
        ['routes','babel','webpack','server.restart']
    );
});

gulp.task('default', ['routes','babel','webpack','server:start','watch']);