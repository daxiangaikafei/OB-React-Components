const  gulp = require('gulp'),
      //cache = require('gulp-cache'),
      gutil = require("gulp-util"),
      clean = require("gulp-clean"),
      webpack = require("webpack"),
      runSequence = require('run-sequence'),
      WebpackDevServer = require("webpack-dev-server");




const webpackConfig = require("./webpack.config.js");


const build = function(env,callback){
	var config = webpackConfig(env);
    webpack(Object.create(config), function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback&&callback();
    });
}



//第一步 生成 Dev
gulp.task("build-dev",function(callback) {
	build("dev",callback);
})


//第二步  生成production
gulp.task("build-production",function(callback) {
	build("production",callback);
})

// 


gulp.task("build",function(){
	runSequence("clean",["build-dev","build-production"]);
})

//辅助 清楚文件
gulp.task('clean', function() {
 return gulp.src(['build', 'dist'], { read: false }).pipe(clean());
});


gulp.task("start", function(callback) {
    var myConfig = require("./example/webpack.config.js");
    new WebpackDevServer(webpack(Object.create(myConfig)), {})
    .listen(8086, "0.0.0.0", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
    });
});
