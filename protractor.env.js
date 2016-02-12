// Common configuration files with defaults plus overrides from environment vars
var webServerDefaultPort = 8081;

// Set custom  Selenium Server address
var customSeleniumServer = '';
// var customSeleniumServer = '../WebDriver/Selenium/selenium-server-standalone-2.50.0.jar';

module.exports = {
  // A base URL for your application under test.
  baseUrl:
    'http://' + (process.env.HTTP_HOST || 'localhost') +
          ':' + (process.env.HTTP_PORT || webServerDefaultPort),

 // Capabilities to be passed to the webdriver instance.
 capabilities: {
   'browserName':
       (process.env.TEST_BROWSER_NAME || 'chrome'),
   'version':
       (process.env.TEST_BROWSER_VERSION || 'ANY')
 },

 multiCapabilities: [{
   'browserName':
       (process.env.TEST_BROWSER_NAME || 'chrome'),
   'version':
       (process.env.TEST_BROWSER_VERSION || 'ANY')
  }, {
    'browserName':
        (process.env.TEST_BROWSER_NAME || 'firefox'),
    'version':
        (process.env.TEST_BROWSER_VERSION || 'ANY')
  }],


  // Default http port to host the web server
  webServerDefaultPort: webServerDefaultPort,

  // Protractor interactive tests
  interactiveTestPort: 6969,

  // The address of a running selenium server.
  seleniumAddress: (process.env.SELENIUM_URL || customSeleniumServer)

};
