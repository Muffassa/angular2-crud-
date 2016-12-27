import { /home/nikita/workspace/Learn/administrationPage } from './app.po';

describe('/home/nikita/workspace/learn/administration App', function() {
  let page: /home/nikita/workspace/Learn/administrationPage;

  beforeEach(() => {
    page = new /home/nikita/workspace/Learn/administrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
