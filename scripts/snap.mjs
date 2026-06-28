import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(__dirname, '..', 'screenshots');
const chrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const browser = await puppeteer.launch({ executablePath: chrome, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

const shot = async (name) => page.screenshot({ path: path.join(out, name) });
const wait = (ms) => new Promise(r => setTimeout(r, ms));

await page.goto('http://localhost:3000/become-a-volunteer', { waitUntil: 'networkidle0' });
await wait(1500);
await shot('volunteer-form.png');

await page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle0' });
await wait(1500);
await shot('contact-form.png');

await browser.close();
console.log('Done');
