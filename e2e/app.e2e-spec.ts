import { StylingAngularPage } from './app.po';

describe('styling-angular App', () => {
  let page: StylingAngularPage;

  beforeEach(() => {
    page = new StylingAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to d2!');
  });
});
