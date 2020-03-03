  
    var compress_images = require('compress-images');

    const INPUT_path_to_your_images = 'assets/img/portfolio/*.{jpg,JPG,png,jpeg,JPEG,svg,gif}';
    const OUTPUT_path = 'assets/img/temp/';
    
    compress_images(INPUT_path_to_your_images, OUTPUT_path, {compress_force: false, statistic: true, autoupdate: true}, false,
                                                {jpg: {engine: 'mozjpeg', command: ['-quality', '100']}},
                                                {png: {engine: 'pngquant', command: ['--quality=20-50']}},
                                                {svg: {engine: 'svgo', command: '--multipass'}},
                                                {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}}, function(){
    });