
module.exports = function (grunt) {
    grunt.initConfig({
        csslint: {
            strict: {
                options: {
                    import: 2
                },
                src: ['public/stylesheets/*.css']
            },
            lax: {
                options: {
                    import: false
                },
                src: ['path/to/**/*.css']
            }
        },
        jslint: {
            all: {
                src: ['public/javascripts/*.js', 'routes/*.js', '*.js'],
                directives: { node: true, sloppy: true, nomen: true}
            }
        },
        copy: {
            target: {
                files: {
                    'prod/': ['dev/**']
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-jslint');

    grunt.registerTask('default', ['copy', 'csslint', 'jslint']);
};