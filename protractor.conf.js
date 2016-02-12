// conf.js
require('./node_modules/systemjs/dist/system-polyfills.src.js');
require('./node_modules/systemjs/dist/system.src.js');

var Env = require('./protractor.env.js');
var Settings = require('./build/test/e2e/common/settings.js');
var LoginPage = require('./build/test/e2e/page-objects/login/login.js');

console.log("classes:", Settings, LoginPage);

exports.config = {
  baseUrl: Settings.baseAppUrl,
  useAllAngular2AppRoots: true,
  framework: 'jasmine',

  // Selenium Server config
  //seleniumServerJar: '../WebDriver/Selenium/selenium-server-standalone-2.50.0.jar',
  seleniumServerJar: Env.seleniumAddress,
  seleniumPort: 4444,
  seleniumArgs: ['-browserTimeout=60'],

  // if using seleniumServerJar, do not specify seleniumAddress !!!
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  //directConnect: true,

  capabilities: Env.capabilities,
  //multiCapabilities: Env.multiCapabilities,

  restartBrowserBetweenTests: false,

  specs: [
      './build/test/e2e/specs/**/*.spec.js'
    ],

  suites: {
    login: './build/test/e2e/specs/login.spec.js',
    smoke: './build/test/e2e/specs/smokes/**/*.spec.js',
    full: './build/test/e2e/specs/**/*.spec.js'
  },

  beforeLaunch: function() {
    // At this point, global variable 'protractor' object will NOT be set up,
    // and globals from the test framework will NOT be available. The main
    // purpose of this function should be to bring up test dependencies.
    require('./node_modules/systemjs/dist/system-polyfills.src.js');
    require('./node_modules/systemjs/dist/system.src.js');

  },


  onPrepare: function() {
    browser.ignoreSynchronization = false;
    // browser.driver.manage().windows().setPosition(0,0);
    // browser.driver.manage().windows().setSize(1024,720);

    // Application login
    var user=Settings.loginUser;
    var password=Settings.loginPassword;

    console.log(user, password);


    LoginPage.login(user, password);
  }

}
