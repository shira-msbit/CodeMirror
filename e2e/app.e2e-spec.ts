import { ATTIoTPage } from './app.po';

describe('att-io-t App', () => {
  let page: ATTIoTPage;

  beforeEach(() => {
    page = new ATTIoTPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
