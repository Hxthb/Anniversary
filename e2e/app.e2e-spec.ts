import { AnniversaryPage } from './app.po';

describe('anniversary App', () => {
  let page: AnniversaryPage;

  beforeEach(() => {
    page = new AnniversaryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
