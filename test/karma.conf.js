'use strict';

module.exports = function(config) {

    config.set({

        basePath: '../',
        frameworks: ['jasmine', 'browserify'],
        preprocessors: {
            'test/unit/**/*.js': ['browserify']
        },
        // browserify configuration
        browserify: {
            debug: true,
            transform: [ 'brfs' ]
        },
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
            //'node_modules/angular/angular.js',
            //'node_modules/angular-mocks/angular-mocks.js',
            // app-specific code
            //'app/js/app.js',
            // test files
            'test/unit/**/*.js'
        ]

    });

};