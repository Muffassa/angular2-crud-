import { browser, element, by } from 'protractor';

export class /home/nikita/workspace/Learn/administrationPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
