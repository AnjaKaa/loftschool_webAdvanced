 'use strict';

module.exports = function() {
	var sprite = require('gulp.spritesmith');

    $.gulp.task('sprite:png_gif', function() {
         var spriteOutput = $.gulp.src("./source/sprite/*.+(png|gif)")
         .pipe(sprite ( { 
         	imgName: 'sprite.png', 
         	cssName: 'sprite.css', 
         	})
         );
 
        spriteOutput.css.pipe($.gulp.dest($.config.root + '/assets/css'));
        spriteOutput.img.pipe($.gulp.dest($.config.root + '/assets/img'));
        return  spriteOutput;
    });
 };

