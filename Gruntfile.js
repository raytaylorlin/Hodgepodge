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
                dest: 'dist/<%= pkg.name %>.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat']);
}