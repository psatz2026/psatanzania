import puppeteer from "puppeteer-core";
import { mkdir } from "fs/promises";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const BASE = "http://localhost:3000";
const OUT = "screenshots";

const routes = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/causes", name: "causes" },
  { path: "/causes/patient-empowerment", name: "causes-detail" },
  { path: "/event", name: "events" },
  { path: "/event/community-health-forum-dar-es-salaam", name: "event-detail" },
  { path: "/blog", name: "blog" },
  { path: "/blog/understanding-patient-rights-tanzania", name: "blog-post" },
  { path: "/volunteers", name: "volunteers" },
  { path: "/become-a-volunteer", name: "become-volunteer" },
  { path: "/contact", name: "contact" },
  { path: "/gallery", name: "gallery" },
  { path: "/faqs", name: "faqs" },
  { path: "/legal-pages/privacy-policy", name: "legal" },
];

await mkdir(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

for (const route of routes) {
  try {
    await page.goto(`${BASE}${route.path}`, { waitUntil: "networkidle0", timeout: 30000 });
    // give external images (Unsplash CDN) time to decode and paint
    await new Promise((r) => setTimeout(r, 1500));
    await page.screenshot({ path: `${OUT}/${route.name}.png`, fullPage: true });
    console.log(`✓ ${route.name}`);
  } catch (err) {
    console.error(`✗ ${route.name}: ${err.message}`);
  }
}

await browser.close();
console.log(`\nScreenshots saved to /${OUT}/`);
