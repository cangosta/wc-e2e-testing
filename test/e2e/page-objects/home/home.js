import { Settings } from 'e2e/common/settings.js';

export class HomePage {
  static get() {
    browser.get(Settings.homePageAddress());
    return browser.getCurrentUrl();
  }
}
