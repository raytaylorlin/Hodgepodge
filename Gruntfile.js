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
        },
        uglify: {
            options: {
                //生成一个banner注释并插入到输出文件的顶部
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'release/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};