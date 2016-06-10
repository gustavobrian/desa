import { Angular2AuthenticationSamplePage } from './app.po';

describe('angular2-authentication-sample App', function() {
  let page: Angular2AuthenticationSamplePage;

  beforeEach(() => {
    page = new Angular2AuthenticationSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-authentication-sample works!');
  });
});
