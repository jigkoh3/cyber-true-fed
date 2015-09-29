module.exports = function(grunt) {

	var port = 10000;

	grunt.initConfig({

		open: {
			all: {
				url: 'http://localhost:' + port
			}
		},

		express: {
			dev: {
				options: {
					script: 'server.js',
					node_env: 'DEV',
					debug: true
				}
			},
			dist: {
				options: {
					script: 'server.js',
					node_env: 'DIST'
				}
			}
		},

		watch: {}

	});


	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-open');

	grunt.registerTask('serve', [
		'express:dev',
		'open',
		'watch'
	]);

};
