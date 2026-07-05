import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(__dirname, '..', 'screenshots');
const chrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const browser = await puppeteer.launch({ executablePath: chrome, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 1800));

// Nav
await page.screenshot({ path: path.join(out, 'logo-nav.png'), clip: { x: 0, y: 0, width: 700, height: 90 } });

// Footer — expand to full page height
const fullH = await page.evaluate(() => document.body.scrollHeight);
await page.setViewport({ width: 1440, height: fullH });
await new Promise(r => setTimeout(r, 300));
await page.screenshot({ path: path.join(out, 'logo-footer.png'), clip: { x: 0, y: fullH - 380, width: 700, height: 180 } });

await browser.close();
console.log('Done');
