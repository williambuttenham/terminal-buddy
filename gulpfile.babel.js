import gulp from 'gulp';
import babel from 'gulp-babel';
import cache from 'gulp-cached';

gulp.task('transpile', () =>
	gulp.src('src/*.js')
		.pipe(cache('transpile'))
		.pipe(babel())
		.pipe(gulp.dest('dist')));

gulp.task('move-the-buddies', () =>
	gulp.src('src/buddies/*.txt')
		.pipe(gulp.dest('dist')));

gulp.task('watch', () => {
	gulp.watch('src/*.js', ['transpile']);
	gulp.watch('src/buddies/*.txt', ['move-the-buddies']);
});

gulp.task('default', ['watch', 'transpile', 'move-the-buddies']);
