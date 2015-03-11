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
        dest: 'www/index.js',
        options: {
          transform: ['reactify']
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: 'www'
        }
      }
    },

    shell: {
      cucumber: {
        command: 'cucumber.js features/*.feature'
      }
    },

    watch: {
      options: {
        spawn: true,
        livereload: true
      },
      js: {
        files: [ 'app/**/*.js', 'app/**/*.jsx' ],
        tasks: [ 'browserify' ]
      },
      css: {
        files: [ 'app/**/*.scss' ],
        tasks: [ 'sass' ]
      }
    }

  });

  grunt.registerTask('build', [ 'clean', 'bower', 'copy', 'sass', 'browserify' ]);
  grunt.registerTask('test', ['build', 'connect', 'shell:cucumber']);

  grunt.registerTask('default', [ 'build', 'connect', 'watch' ]);

}
