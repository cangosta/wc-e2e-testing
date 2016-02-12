
import { Settings } from 'e2e/common/settings.js';

export class LoginPage {

  emailInput = element(by.id('email-input'));
  passwordInput = element(by.id('password-input'));
  // loginButton = element(by.css('.btn.btn-default'));
  loginButton = element(by.id('login-button'));

  static get() {
    browser.get(Settings.loginPageAddress());
    browser.getCurrentUrl();
  }

  static set email(value) {
    emailInput.sendKeys(value);
  }

  static set password(value) {
    passwordInput.sendKeys(value);
  }

  static clickToLogin() {
    loginButton.click();
    browser.waitForAngular();

    waitLogin();
  }

  static login(email, password) {
    get();
    emailInput.sendKeys(email);
    passwordInput.sendKeys(password);
    loginButton.click();
    browser.waitForAngular();

    waitLogin();
  }

  static waitLogin() {
    // Login takes some time, so wait until it's done.
    // For the test app's login, we know it's done when it redirects to
    // index.html.
    return browser.driver.wait(() => {
       return browser.driver.getCurrentUrl().then( (url) => {
        //  console.log(url);
        console.log('Wait for login');

         if (/home/.test(url)) { console.log('Logged in') };

          return /home/.test(url);
       });
    }, Settings.loginTimeout(), 'Login failed');

  }

  static get emailValue() {
    return emailInput.getAttribute('value');
  }

}
