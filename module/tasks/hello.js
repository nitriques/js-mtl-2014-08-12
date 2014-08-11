/*global module*/
/**
 * Module task example
 */
module.exports = function (grunt) {
	'use strict';
	grunt.registerTask('hello','Task description', function () {
		grunt.log.writeln('Hello world!');
	});
}; 