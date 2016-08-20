module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    clean: {
    	build: {
    		src: ["build/"]
    	}
    },
    
    copy: {
    	main: {
    		files:[ 
    		     {expand: true, cwd:"WebContent/src/app/", src: ['editor.css'], dest: 'build/', filter:"isFile"},
    		     {expand: true, cwd:"WebContent/src/app/", src: ['doc.html'], dest: 'build/', filter:"isFile"}
    		]
    	}
    },
    
    requirejs: {
    	compile: {
    		options: {
    			baseUrl: 'WebContent/src/app',
    			name: 'editor',
    			out: 'build/<%= pkg.name %>.min.js'
    		}
    	}
    }
  });
  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  
  // 默认被执行的任务列表。
  grunt.registerTask('default', ['clean', 'copy',/*'uglify'*/ 'requirejs']);
};