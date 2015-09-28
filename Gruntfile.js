/**
 * Created by m3rkz0r on 9/26/15.
 */
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/scripts/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "jquery/dist/jquery.min.js",
                    "jquery/dist/jquery.min.map",
                    "handlebars/dist//handlebars.min.js",
                    "bootstrap/dist/js/bootstrap.min.js",
                    "bootstrap/dist/css/bootstrap.min.css",
                    "bootstrap/fonts/glyphicons-halflings-regular.ttf",
                    "bootstrap/fonts/glyphicons-halflings-regular.woff",
                    "bootstrap/fonts/glyphicons-halflings-regular.woff2"

                ],
                "dest": "server/public/vendor/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['copy', 'uglify']);

};
