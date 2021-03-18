exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine',
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: [
                'start-maximized'
            ]
        }
    },
    onPrepare: () => {
        browser.waitForAngularEnabled(false)
    },
    specs: ['../test/spec/spec.js'],
    params: require('../test/data/common-data.json'),
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};