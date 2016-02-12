import { Settings } from 'e2e/common/settings.js';
import { Utils } from 'e2e/common/utils.js';
import { LoginPage } from 'e2e/page-objects/login/login.js';
import { HomePage } from 'e2e/page-objects/home/home.js';

describe('login page', () => {
  // beforeEach(function () {
  // });

  it('should start', () => {
    LoginPage.get();
  });

  it('should set user', () => {
    LoginPage.email=Settings.loginUser;
    expect(element(by.id('email-input')).getAttribute('value')).toEqual(Settings.loginUser);
  });

  it('should set password', () => {
    LoginPage.password=Settings.loginPassword;
    expect(element(by.id('password-input')).getAttribute('value')).toEqual(Settings.password);
  });

  it('should login', () => {
    console.log(Settings.homePageAddress);
    LoginPage.clickToLogin();

    utils.waitForUrlToChangeTo(Settings.homePageAddress).then( () => {
      expect(browser.getCurrentUrl()).toEqual(Settings.homePageAddress);
    })

  });

});

// import { Settings } from 'e2e/common/settings.js';
// import { Utils } from 'e2e/common/utils.js';
// import { LoginPage } from 'e2e/page-objects/login/login.js';
// import { HomePage } from 'e2e/page-objects/home/home.js';
//
// describe('login page', () => {
//   let login;
//
//   beforeEach( () => {
//     login = new LoginPage();
//   });
//
//   it('should start', () => {
//     login.get();
//     expect(browser.getCurrentUrl()).toEqual(Settings.loginPageAddress);
//   });
//
//   it('should set user', () => {
//     login.email=Settings.loginUser;
//     expect(element(by.id('email-input')).getAttribute('value')).toEqual(Settings.loginUser);
//   });
//
//   it('should set password', () => {
//     login.password=Settings.loginPassword;
//     expect(element(by.id('password-input')).getAttribute('value')).toEqual(Settings.password);
//   });
//
//   it('should login', () => {
//     console.log(Settings.homePageAddress);
//     login.email = Settings.loginUser;
//     login.password = Settings.loginPassword;
//     login.clickToLogin();
//
//     utils.waitForUrlToChangeTo(Settings.homePageAddress).then( () => {
//       expect(browser.getCurrentUrl()).toEqual(Settings.homePageAddress);
//     })
//
//   });
//
// });
