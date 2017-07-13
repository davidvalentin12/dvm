import { DvmohringPage } from './app.po';

describe('dvmohring App', function() {
  let page: DvmohringPage;

  beforeEach(() => {
    page = new DvmohringPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
