import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(__dirname, '..', 'screenshots');
const chrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const browser = await puppeteer.launch({ executablePath: chrome, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 200 });

await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 1000));

// Default state
await page.screenshot({ path: path.join(out, 'nav-default.png') });

// Hover state
const btn = await page.$('header a[href="/become-a-volunteer"]');
await btn.hover();
await new Promise(r => setTimeout(r, 400));
await page.screenshot({ path: path.join(out, 'nav-hover.png') });

await browser.close();
console.log('Done');
