module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      js: {
        src: ['src/js/*.js'],
        dest: 'dist/js/script.main.js'
      }
    },

    concat_css: {
    options: {
    },
    all: {
      src: ["src/css/*.css"],
      dest: "dist/css/style.css"
    },
  },

    uglify: {
      dist: {
        src: ['dist/js/script.main.js'],
        dest: 'dist/js/script.main.min.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-css');

  grunt.registerTask('default', ['concat', 'uglify', 'concat_css']);

};
