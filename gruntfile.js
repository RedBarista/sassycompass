module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                '_/js/app.js' : ['_/components/js/*.js']
                }
            }
        }, // Uglify
        compass: {
          dev: {
              options: {
                  config: 'config.rb'
              } // options
          }  // dev
        },
        watch: {
            options: {livereload: true},
            scripts: {
                files: ['_/components/js/*.js'],
                tasks: ['uglify']
            }, // Scripts
            sass: {
                files: ['_/components/sass/*.scss'],
                tasks: ['compass:dev']
            }, // Sass
            html: {
                files: ['*.html']
            } // HTML
        } // Watch
    }); // InitConfig

    grunt.registerTask('default', 'watch');
} // exports