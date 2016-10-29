import { AndreyZavoznenkoAutocompletePage } from './app.po';

describe('andrey-zavoznenko-autocomplete App', function() {
  let page: AndreyZavoznenkoAutocompletePage;

  beforeEach(() => {
    page = new AndreyZavoznenkoAutocompletePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
