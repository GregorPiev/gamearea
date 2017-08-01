module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["dist", 'dist'],
        copy: {
            application: {
                expand: true,
                src: ['appl/**/*.{js}'],
                dest: 'dist/'
            }
        },
        angular: {
            expand: true,
            src: ['lib/angular/**'],
            dest: 'dist/'
        },
        libs: {
            expand: true,
            src: ['lib/jquery/jquery-1.11.3.js', 'lib/bootstrap/bootstrap.min.js', 'lib/datatables/jquery.dataTables.min.js'],
            dest: 'dist/'
        },
        libcss: {
            expand: true,
            src: ['lib/bootstrap/bootstrap.min.css', 'lib/datatables/dataTables.bootstrap.css'],
            dest: 'dist/'
        },
        react: {
            expand: true,
            src: ['lib/react/**/*.js'],
            dest: 'dist/'
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
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask('default', ['copy', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin']);

};


