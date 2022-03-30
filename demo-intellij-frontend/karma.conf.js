process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
    var configuration = {
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-jasmine-html-reporter'),
            require('karma-junit-reporter'),
            require('karma-chrome-launcher'),
            require('karma-coverage'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        junitReporter: {
            outputDir: 'reports',
            suite: 'unit-tests',
            outputFile: 'unit-tests.xml',
            useBrowserName: false
        },
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageReporter: {
            dir: require('path').join(__dirname, 'coverage'), reports: ['html', 'lcovonly'],
            subdir: '.',
            fixWebpackSourcePaths: true
        },

        reporters: config.angularCli && config.angularCli.codeCoverage
            ? ['progress', 'junit']
            : ['progress', 'kjhtml', 'junit'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadlessNoSandbox'],
        customLaunchers: {
            ChromeHeadlessNoSandbox: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox']
            }
        },
        singleRun: false,
        browserNoActivityTimeout: 100000,
        captureTimeout: 120000,
    };

    config.set(configuration);
};
