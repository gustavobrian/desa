export class Angular2AuthenticationSamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-authentication-sample-app h1')).getText();
  }
}
