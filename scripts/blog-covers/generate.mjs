/**
 * Generates branded cover images for blog posts.
 *
 *   node scripts/blog-covers/generate.mjs            # all posts missing a cover
 *   node scripts/blog-covers/generate.mjs --force    # regenerate every cover
 *   node scripts/blog-covers/generate.mjs my-slug    # one post
 *
 * Output: public/images/blog/covers/<slug>.webp (1600x840). The script also
 * points the post's `image:` at the new cover and keeps any previous image
 * path in `legacyImage:` so no existing image is lost.
 *
 * Requires Playwright with Chromium (dev only; not a site dependency).
 */
import fs from "fs";
import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const icons = require("lucide-react");
const sharp = require("sharp");
const { chromium } = require("playwright");

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const BLOG = path.join(ROOT, "content/blog");
const OUT = path.join(ROOT, "public/images/blog/covers");
const W = 1600;
const H = 840;

/** Icon per post (falls back to the category icon). */
const postIcons = {
  "podcast-help-your-team-george-murray": "Mic",
  "podcast-unstoppable-author-interview": "BookOpen",
  "what-is-leadership-coaching": "Compass",
  "how-to-reduce-employee-turnover-in-manufacturing": "Factory",
  "how-to-lead-a-diverse-workforce": "UsersRound",
  "executive-coach-vs-mentor": "MessagesSquare",
  "strategic-planning-process-for-leadership-teams": "Map",
  "talent-development-vs-talent-management": "Sprout",
  "does-my-teen-need-a-life-coach": "GraduationCap",
  "how-to-build-a-leadership-trainee-program": "ListChecks",
  "4-ways-for-dealing-with-change": "RefreshCw",
  "5-ways-to-motivate-your-employees": "Flame",
  "diversity-in-the-workplace-why-it-matters": "Globe",
  "education-vs-training-whats-more-important": "BookOpen",
  "finding-the-leader-within-you": "Mountain",
  "for-leaders-self-awareness-is-everything": "ScanFace",
  "four-ways-to-improve-company-culture": "HeartHandshake",
  "how-success-plus-helped-tyson-foods-decrease-turnover-by-30": "TrendingDown",
  "how-to-have-the-talk": "MessageCircle",
  "keeping-the-peace-best-practices-for-internal-conflict-resolution": "Scale",
  "reducing-millennial-turnover": "Clock",
  "secrets-to-an-effective-one-to-one": "Users",
  "setting-the-tone-how-to-stay-motivated-so-you-can-motivate": "Gauge",
  "spring-is-here": "Leaf",
  "start-smart-utilizing-the-daily-huddle": "Sunrise",
  "the-basics-of-strategic-planning": "Target",
  "the-number-one-complaint-employees-have-about-their-leaders": "Award",
  "the-power-of-influence": "Waves",
  "the-root-cause-to-lost-profits": "Search",
  "the-sun-rises-for-everyone": "Sun",
  "three-important-facts-about-turnover": "DoorOpen",
  "toxic-employee-problems": "ShieldAlert",
  "want-to-be-a-great-leader-master-these-four-management-skills-1": "Layers",
  "why-diversity-plans-fail": "Puzzle",
  "why-you-should-hire-a-business-coach": "Handshake",
};
const categoryIcons = {
  Leadership: "Compass",
  Retention: "Users",
  Diversity: "UsersRound",
  Strategy: "Target",
  Culture: "HeartHandshake",
  Motivation: "Flame",
  "Case Study": "BarChart3",
  "Talent Development": "Sprout",
  Mentoring: "MessagesSquare",
};

function frontMatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const data = {};
  if (!m) return data;
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (!kv) continue;
    let v = kv[2].trim();
    if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1).replace(/\\"/g, '"');
    if (v.startsWith("[") && v.endsWith("]")) v = v.slice(1, -1).split(",").map((s) => s.trim());
    data[kv[1]] = v;
  }
  return data;
}

function hash(s) {
  let h = 2166136261;
  for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return h >>> 0;
}

function iconSvg(name, size, color, stroke = 1.25) {
  const Icon = icons[name] || icons.Sparkles;
  return renderToStaticMarkup(React.createElement(Icon, { size, color, strokeWidth: stroke }));
}

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function html(post) {
  const h = hash(post.slug);
  const variant = h % 3; // decorative motif
  const glowX = 55 + (h % 30);
  const glowY = 10 + ((h >> 5) % 60);
  const icon = postIcons[post.slug] || categoryIcons[post.category] || "Sparkles";
  const title = post.title.replace(/^Case Study:\s*/i, "");
  const size = title.length > 70 ? 54 : title.length > 48 ? 62 : 72;

  const motif =
    variant === 0
      ? `<div class="ring r1"></div><div class="ring r2"></div><div class="ring r3"></div>`
      : variant === 1
        ? `<div class="bars">${Array.from({ length: 7 }, (_, i) => `<span style="height:${30 + ((h >> (i * 3)) % 7) * 14}px"></span>`).join("")}</div><div class="ring r2"></div>`
        : `<div class="dots"></div><div class="ring r1"></div>`;

  return `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,500&family=Geist:wght@500;600&display=block" rel="stylesheet">
<style>
*{margin:0;box-sizing:border-box}
body{width:${W}px;height:${H}px;overflow:hidden;background:#0c0d2b;font-family:Geist,sans-serif;position:relative;color:#fff}
.bg{position:absolute;inset:0;background:
 radial-gradient(900px 600px at ${glowX}% ${glowY}%, rgba(43,45,110,.95), transparent 70%),
 radial-gradient(520px 420px at 92% 100%, rgba(244,208,63,.22), transparent 70%),
 radial-gradient(600px 500px at 0% 0%, rgba(74,76,163,.35), transparent 70%)}
.grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);background-size:56px 56px;-webkit-mask-image:radial-gradient(ellipse at 70% 50%,#000 30%,transparent 80%)}
.text{position:absolute;left:96px;top:0;bottom:0;width:880px;display:flex;flex-direction:column;justify-content:center}
.eyebrow{display:flex;align-items:center;gap:16px;color:#f4d03f;font-size:20px;font-weight:600;letter-spacing:.22em;text-transform:uppercase}
.eyebrow:before{content:"";width:48px;height:2px;background:#f4d03f}
h1{font-family:"Source Serif 4",serif;font-weight:500;font-size:${size}px;line-height:1.08;margin-top:28px;letter-spacing:-.01em}
.brand{position:absolute;left:96px;bottom:64px;font-size:19px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.55)}
.brand b{color:#f4d03f;font-weight:600}
.art{position:absolute;right:110px;top:50%;width:420px;height:420px;transform:translateY(-50%)}
.disc{position:absolute;inset:70px;border-radius:50%;background:linear-gradient(145deg,#2b2d6e,#15163f);box-shadow:0 40px 80px -20px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.12);display:grid;place-items:center}
.disc:after{content:"";position:absolute;inset:-1px;border-radius:50%;border:1px solid rgba(244,208,63,.35)}
.ring{position:absolute;border-radius:50%;border:1px solid rgba(255,255,255,.12)}
.r1{inset:20px}.r2{inset:-30px;border-style:dashed;border-color:rgba(244,208,63,.25)}.r3{inset:-90px;border-color:rgba(255,255,255,.06)}
.bars{position:absolute;right:-60px;bottom:-190px;display:flex;align-items:flex-end;gap:14px;opacity:.5}
.bars span{width:18px;border-radius:9px 9px 0 0;background:linear-gradient(#f4d03f,rgba(244,208,63,.1))}
.dots{position:absolute;inset:-80px;background-image:radial-gradient(rgba(244,208,63,.35) 2px,transparent 2.5px);background-size:28px 28px;-webkit-mask-image:radial-gradient(circle,#000 35%,transparent 70%)}
.pip{position:absolute;width:18px;height:18px;border-radius:50%;background:#f4d03f;box-shadow:0 0 30px rgba(244,208,63,.8)}
</style></head><body>
<div class="bg"></div><div class="grid"></div>
<div class="text"><p class="eyebrow">${esc(post.category)}</p><h1>${esc(title)}</h1></div>
<p class="brand"><b>Success Plus</b> &nbsp;·&nbsp; Insights</p>
<div class="art">${motif}<div class="disc">${iconSvg(icon, 150, "#f4d03f")}</div>
<span class="pip" style="top:${40 + (h % 40)}px;right:${20 + ((h >> 3) % 40)}px"></span></div>
</body></html>`;
}

function setFrontMatter(file, image) {
  let raw = fs.readFileSync(file, "utf8");
  const fm = frontMatter(raw);
  if (fm.image === image) return;
  raw = raw.replace(/^---\r?\n([\s\S]*?)\r?\n---/, (all, body) => {
    let b = body;
    if (fm.image && !fm.legacyImage) b = b.replace(/^image:.*$/m, `image: ${image}\nlegacyImage: ${fm.image}`);
    else if (fm.image) b = b.replace(/^image:.*$/m, `image: ${image}`);
    else b = b.replace(/^(excerpt:.*)$/m, `$1\nimage: ${image}`);
    return `---\n${b}\n---`;
  });
  fs.writeFileSync(file, raw);
}

const args = process.argv.slice(2);
const force = args.includes("--force");
const only = args.filter((a) => !a.startsWith("--"));

fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });

for (const f of fs.readdirSync(BLOG).filter((f) => f.endsWith(".md"))) {
  const slug = f.replace(/\.md$/, "");
  if (only.length && !only.includes(slug)) continue;
  const file = path.join(BLOG, f);
  const fm = frontMatter(fs.readFileSync(file, "utf8"));
  const out = path.join(OUT, `${slug}.webp`);
  const image = `/images/blog/covers/${slug}.webp`;
  if (!force && fs.existsSync(out)) {
    setFrontMatter(file, image);
    continue;
  }
  const category = (Array.isArray(fm.categories) ? fm.categories[0] : fm.categories) || "Insights";
  await page.setContent(html({ slug, title: fm.title, category }), { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const png = await page.screenshot({ type: "png" });
  await sharp(png).webp({ quality: 82 }).toFile(out);
  setFrontMatter(file, image);
  console.log("cover:", slug);
}
await browser.close();
