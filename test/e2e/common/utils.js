export class Utils {

  static waitForUrlToChangeTo(url) {
    let urlRegex = new RegExp(url);
    let currentUrl;

    return browser.getCurrentUrl()
      .then((url) => currentUrl = url )
      .then(() => {
        return browser.wait(() => {
          return browser.getCurrentUrl().then((url) => {
            return urlRegex.test(url);
          });
        });
      });
  }

  static urlChanged(url) {
    return () => {
      return browser.getCurrentUrl().then((actualUrl) => url != actualUrl);
    };
  }

}
