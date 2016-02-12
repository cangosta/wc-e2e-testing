import { Settings } from 'e2e/common/settings.js';
import { HomePage } from 'e2e/page-objects/home/home.js';
import { Utils } from 'e2e/common/utils.js';

describe('home page', () => {
  // beforeEach(function () {
  // });

  it('should start', function () {
    // A home página é carregada imediatamente a seguir ao login, que é efetuado no onPrepare do conf.js
    console.log('Home page loaded')

    let hPage = Settings.homePageAddress();
    console.log(hPage);

    let apps = element.all(by.repeater('app in applications'));
    browser.pause();
    console.log(apps);



  //   utils.waitForUrlToChangeTo(hPage).then(function() {
  //     expect(browser.getCurrentUrl()).toEqual(hPage);
  //
  //     var apps = element.all(by.repeater('app in applications'));
  //     browser.pause();
  //     browser.wait(function() {
  //       return apps.count() > 0;
  //     }).then(function() {
  //       console.log("ok");
  //     })
  //
  //     apps.count().then(function(count) {
  //       console.log(count);
  //     })
  //
  //   })
  });
});
