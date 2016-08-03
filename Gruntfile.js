module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-execute');

  grunt.initConfig({
    watch: {
      files: ['**/*.js'],
      tasks: ['execute'],
    },
    execute: {
      src: ['index.js']
    }
  });

  grunt.registerTask('default', ['execute', 'watch']);
};
