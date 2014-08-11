/*global module*/
/**
 * Async task example
 */
module.exports = function (grunt) {
	'use strict';
	grunt.initConfig({
		hello: {
			
		}
	});
	grunt.registerTask('hello','Task description', function () {
		var done = this.async(); // creates a async callback
		// fake sync operation
		setTimeout(function async() {
			grunt.log.writeln('Hello async world!');
			done(true); // call the callback with success boolean parameter
		}, 1000);
	});
};