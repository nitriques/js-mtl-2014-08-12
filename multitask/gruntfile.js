/*global module*/
/**
 * Multi task example
 */
module.exports = function (grunt) {
	'use strict';
	grunt.initConfig({
		hello: {
			
		}
	});
	grunt.registerMultiTask('hello','Task description', function () {
		grunt.log.writeln('Hello ' + this.target + '!');
	});
};