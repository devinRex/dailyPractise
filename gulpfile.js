var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function(){
	return gulp.src('css3/keyframes/css/*.css')
			.pipe(autoprefixer({
				browsers:['last 2 versions'],
				cascade: false
			}))
			.pipe(gulp.dest('css3/keyframes/css/dist'));
});