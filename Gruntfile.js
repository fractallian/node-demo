module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.initConfig({
    watch: {
      files: ['src/**/*.js', 'test/**/*.js'],
      tasks: ['mochaTest']
    },
    execute: {
      // rabbits: {
      //   src: ['src/rabbits.js']
      // }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          clearRequireCache: true // Optionally clear the require cache before running tests (defaults to false)
        },
        src: ['test/**/rabbits.test.js']
      }
    }
  });

  grunt.registerTask('default', ['mochaTest', 'watch']);
};
