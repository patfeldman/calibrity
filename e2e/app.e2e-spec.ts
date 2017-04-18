import { CalibrityPage } from './app.po';

describe('calibrity App', () => {
  let page: CalibrityPage;

  beforeEach(() => {
    page = new CalibrityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
