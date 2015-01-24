'use strict';

module.exports = function(config) {

    config.set({

        basePath: '../',
        frameworks: ['jasmine'],
        browsers: [ 'PhantomJS' ],

        logLevel: 'LOG_DEBUG',

        singleRun: true,
        autoWatch: false,
        reporters: ['progress'],


        plugins: [
            'karma-jasmine',
            'karma-browserify',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher'
        ],

        proxies: {
            '/': 'http://localhost:9876/'
        },

        urlRoot: '/__karma__/',

        files: [
            // 3rd-party resources
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            // app-specific code
            'app/js/main.js',
            // test files
            'testnob/unit/**/*.js'
        ]

    });

};