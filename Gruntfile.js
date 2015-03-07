module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    bower: {
      install: {
        options: {
          copy: false
        }
      }
    },

    clean: {
      build: [ 'www' ]
    },

    copy: {
      html: {
        src: 'app/index.html',
        dest: 'www/index.html'
      }
    },

    sass: {
      dist: {
        src: 'app/index.scss',
        dest: 'www/index.css',
        options: {
          includePaths: [ 'bower_components' ]
        }
      }
    },

    browserify: {
      dist: {
        src: 'app/index.js',
        dest: 'www/index.js'
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: 'www',
          livereload: true
        }
      }
    },

    watch: {
      options: {
        spawn: true,
        livereload: true
      },
      js: {
        files: [ 'app/**/*.js' ],
        tasks: [ 'browserify' ]
      },
      css: {
        files: [ 'app/**/*.scss' ],
        tasks: [ 'sass' ]
      }
    }

  });

  grunt.registerTask('build', [ 'clean', 'bower', 'copy', 'sass', 'browserify' ]);

  grunt.registerTask('default', [ 'build', 'connect', 'watch' ]);

}
