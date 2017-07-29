import { browser, by, element } from 'protractor';

export class StylingAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('d2-root h1')).getText();
  }
}
