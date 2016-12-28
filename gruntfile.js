module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
		concat: {
                dist: {
			        src: [
            		'bootstrap/js/*.js', // All JS in the libs folder
        			],
        		dest: 'bootstrap.prod/js/production.js',
          }
      },
		responsive_images: {
      		dev: {
        		options: {
          		engine: 'im',
          			sizes: [{
            			name: 'small',
				            width: '30%',
				            suffix: '_small',
				            quality: 20
				          },{
			            name: 'large',
			            width: '50%',
			            suffix: '_large',
			            quality: 40
			          }]
			        },
		        files: [{
		          expand: true,
		          src: ['*.{gif,jpg,png,jpeg}'],
		          cwd: 'images/',
		          dest: 'images/'
		        }]
		      }
		    },
		  });
    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-responsive-images');
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'responsive_images']);
};