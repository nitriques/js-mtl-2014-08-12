/*global module*/
/**
 * Simple task example
 */
module.exports = function (grunt) {
	'use strict';
	grunt.initConfig({
		hello: {
			
		}
	});
	grunt.registerTask('hello','Task description', function () {
		grunt.log.writeln('Hello world!');
	});
};