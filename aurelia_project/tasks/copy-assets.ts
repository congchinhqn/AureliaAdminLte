import * as gulp from 'gulp';
import * as project from '../aurelia.json';

export default function copyAssets(done) {
  const assets = project.paths.assets;

  assets.forEach(item => {
    gulp.src(item.path)
      .pipe(gulp.dest(item.dest));
  });

  done();
}