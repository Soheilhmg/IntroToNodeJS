
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
                src: ['public/stylesheets/*.css']
            }
        },
        jslint: {
            all: {
                src: ['public/javascripts/*.js', 'routes/*.js', '*.js'],
                directives: { node: true, sloppy: true, nomen: true}
            }
        },
        jasmine: {
            pivotal: {
                src: 'routes/*.js',
                options: {
                    specs: 'spec/*Spec.js',
                    helpers: 'spec/*Helper.js'
                }
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
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default', ['jslint', 'csslint']);
};