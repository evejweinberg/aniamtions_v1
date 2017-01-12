module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		postcss: {
				options: {
						map: true,
						processors: [
								require('autoprefixer')
						]
				},
				dist: {
						src: 'css/*.css'
				}
		}
	});

	grunt.registerTask('default', ['postcss:dist']);
};
