const puppeteer = require('puppeteer');

const { generateText } = require('../../util');
const { validateInput } = require('../../util');

test('Generate Text', () => {
    const input = generateText('Test', '100');
    const output = 'Test 100';

    expect(input).toBe(output);
})

test('Validate Function Check If Exists', () => {
    expect(validateInput).toBeDefined();
})

test('Final E2E', async () => {
    pageURL = "http://127.0.0.1:5500/index.html";

    const browser = await puppeteer.launch({
        headless: true,
        slowMo: 10,
        args: ['--window-size=1920,1080']
    })

    const page = await browser.newPage();
    await page.goto(pageURL);

    await page.click('input#name');
    await page.type('input#name', 'Alpha');
    await page.click('input#age');
    await page.type('input#age', '100');
    await page.click('#btnAddUser');

    const FinalText = await page.$eval('.user-item', el => el.textContent);

    browser.close();

    expect(FinalText).toBe('Alpha 100');
})