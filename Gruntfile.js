module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                //定义一个用于插入合并输出文件之间的字符
                separator: '\n'
            },
            dist: {
                //用于连接的文件
                src: ['src/*.js'],
                //返回的JS文件位置
                dest: 'release/<%= pkg.name %>.js'
            }
        },
        jshint: {
            //定义用于检测的文件
            files: ['gruntfile.js', 'src/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'concat']);
};