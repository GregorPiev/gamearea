module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["dist", '.tmp'],
        copy: {
//            application: {
//                expand: true,
//                cwd: 'appl/',
//                src: ['**', '**/*.{js}', '!**/*.html', '!**/*.scss'],
//                dest: 'dist/'
//            },
//            angular: {
//                expand: true,
//                cwd: 'lib/angular/',
//                src: ['**', '!1.4.4/**'],
//                dest: 'dist/'
//            },
//            libs: {
//                expand: true,
//                cwd: 'lib/',
//                src: ['jquery/jquery-1.11.3.js', 'bootstrap/bootstrap.min.js', 'datatables/jquery.dataTables.min.js'],
//                dest: 'dist/'
//            },
//            libcss: {
//                expand: true,
//                cwd: 'lib/',
//                src: ['bootstrap/bootstrap.min.css', 'datatables/dataTables.bootstrap.css'],
//                dest: 'dist/'
//            }
//            react: {
//                expand: true,
//                cwd: 'lib/',
//                src: ['react/**/*.js'],
//                dest: 'dist/'
//            }
        },
        useminPrepare: {
            html: 'index.html'
        },
        usemin: {
            html: ['dist/index.html']
        },
        uglify: {
            options: {
                report: 'min',
                mangle: false
            },
            files: {
                expand: true,
                src: '!*.css'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    //grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-usemin');

    //grunt.registerTask('default', ['copy', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin']);
    grunt.registerTask('default', ['useminPrepare', 'concat', 'uglify', 'usemin']);

};


