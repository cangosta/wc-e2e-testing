export class Settings {
  static get baseAppUrl() {
    return 'http://localhost:12345';
  }

  static get loginPageAddress() {
    return this.baseAppUrl + '/#/login';
  }

  static get homePageAddress() {
    return this.baseAppUrl + '/#/home';
  }

  static get loginUser() {
    return 'luiz.santos@wintouch.pt';
  }

  static get loginPassword() {
    return '2';
  }

  static get loginTimeout() {
    return 2000;
  }

}
