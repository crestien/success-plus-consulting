/**
 * Generates the default 1200x630 social share image.
 *
 *   NODE_PATH=$(npm root -g) node scripts/og-image/generate.mjs
 *
 * Output: public/images/og-default.jpg. Requires Playwright with Chromium
 * (dev only; not a site dependency).
 */
import fs from "fs";
import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const img = (p) => `data:image/${path.extname(p).slice(1).replace("jpg", "jpeg")};base64,${fs.readFileSync(path.join(ROOT, "public", p)).toString("base64")}`;

const html = `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,500&family=Geist:wght@500;600&display=block" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{width:1200px;height:630px;overflow:hidden;background:#0c0d2b;font-family:Geist,sans-serif;color:#fff;position:relative}
.bg{position:absolute;inset:0;background:radial-gradient(ellipse 60% 70% at 78% 45%,rgba(43,45,110,.95),transparent 70%),radial-gradient(circle at 95% 100%,rgba(244,208,63,.16),transparent 40%)}
.grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);background-size:48px 48px;-webkit-mask-image:radial-gradient(ellipse at 70% 50%,#000 30%,transparent 80%)}
.copy{position:absolute;left:80px;top:72px;width:690px}
.logo{height:64px}
.eyebrow{margin-top:56px;display:flex;align-items:center;gap:14px;color:#f4d03f;font-size:17px;font-weight:600;letter-spacing:.22em;text-transform:uppercase}
.eyebrow:before{content:"";width:40px;height:2px;background:#f4d03f}
h1{font-family:"Source Serif 4",serif;font-weight:500;font-size:62px;line-height:1.06;margin-top:22px;letter-spacing:-.01em}
h1 em{color:#f4d03f;font-style:italic}
.meta{position:absolute;left:80px;bottom:60px;font-size:18px;font-weight:500;color:rgba(255,255,255,.62)}
.meta b{color:#fff;font-weight:600}
.book{position:absolute;right:96px;top:50%;transform:translateY(-50%) rotate(3deg);width:250px;box-shadow:0 40px 60px -20px rgba(0,0,0,.7);border-radius:4px}
.glow{position:absolute;right:60px;top:120px;width:330px;height:390px;border-radius:50%;background:rgba(244,208,63,.28);filter:blur(60px)}
</style></head><body>
<div class="bg"></div><div class="grid"></div><div class="glow"></div>
<div class="copy">
<img class="logo" src="${img("/images/logo-white.png")}" alt="">
<p class="eyebrow">Leadership &amp; Organizational Performance</p>
<h1>Strengthen organizational performance <em>through people.</em></h1>
</div>
<p class="meta"><b>successplusconsulting.com</b> &nbsp;·&nbsp; Since 1993 &nbsp;·&nbsp; Founded by Isaac Russell</p>
<img class="book" src="${img("/images/book-cover.webp")}" alt="">
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: path.join(ROOT, "public/images/og-default.jpg"), type: "jpeg", quality: 88 });
await browser.close();
console.log("Wrote public/images/og-default.jpg");
