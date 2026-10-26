// Exports index.html to ../brand-guidelines.pdf, the same way Chrome's "Save as PDF" does.
// Needs the playwright package (the redesign moves the tests to Playwright anyway):
//   pnpm add -D playwright && pnpm exec playwright install chromium
// then, from the repo root: node docs/brand-guidelines-source/build-pdf.mjs
import { chromium } from "playwright";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, "..", "brand-guidelines.pdf");

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(pathToFileURL(join(here, "index.html")).href);
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: out, preferCSSPageSize: true, printBackground: true });
await browser.close();
console.log(`Wrote ${out}`);
