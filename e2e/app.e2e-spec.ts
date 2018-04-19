import { LttpPrizepackTrackerPage } from './app.po';

describe('lttp-prizepack-tracker App', () => {
  let page: LttpPrizepackTrackerPage;

  beforeEach(() => {
    page = new LttpPrizepackTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
