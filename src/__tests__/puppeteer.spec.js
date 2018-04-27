import puppeteer from 'puppeteer';
import expect from 'expect';
const timeout = 4000;

describe('/ (Index Page)', () => {
  let page;

  beforeAll(async () => {
    const browser = await puppeteer.launch({});
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
  }, timeout);

  afterAll(async () => {
    await page.close();
  });

  it('loads without error', async () => {
    let title = await page.evaluate(
      sel => document.querySelector('h1').innerText
    );
    expect(title).toEqual('JEOPARDY!');
  });
});
