import expect from 'expect';

describe('webdriver.io page', () => {
  // Requires you to have a working internet connection
  // Feel free to delete this after the tests are working.
  it('should have the right title - the fancy generator way', () => {
    browser.url('http://webdriver.io');
    var title = browser.getTitle();
    expect(title).toEqual('WebdriverIO - WebDriver bindings for Node.js');
  });
});

describe('Jeopardy Game', () => {
  it('loads without error', () => {
    browser.url('/');
    expect(browser.getText('h1')).toEqual('JEOPARDY!');
  });
});
