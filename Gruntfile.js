module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
          dist: {
            src: ['src/*.js'],
            dest: 'js/script.min.js',
          }
        },
        concat_css:{
          all: {
            src: ["src/*.css"],
            dest: "css/style.min.css"
          },
        },
        uglify: {
          build: {
            src: 'js/script.min.js',
            dest: 'js/script.min.js'
          }
        },
        cssmin: {
          target: {
            files: [{
              src: ["css/style.min.css"],
              dest: "css/style.min.css"
            }]
          }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat','concat_css','uglify','cssmin']);

};
