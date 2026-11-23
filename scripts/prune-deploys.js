/**
 * SiteGround keeps every deploy in public_html/.nodeapp/<timestamp>-<id>/ and
 * never removes old ones, which eventually fills the quota (ENOSPC on npm install).
 *
 * Runs before `next build`. Only acts when the project sits directly inside a
 * `.nodeapp` folder, so local builds are untouched. Keeps the folder being built
 * (this deploy) and the one `latest` points to (the site currently running);
 * deletes every other deploy folder. Never fails the build.
 */
const fs = require("fs");
const path = require("path");

try {
  const current = path.resolve(process.cwd());
  const root = path.dirname(current);
  if (path.basename(root) !== ".nodeapp") process.exit(0);

  const keep = new Set([current]);
  try {
    keep.add(fs.realpathSync(path.join(root, "latest")));
  } catch {
    /* no latest link yet */
  }

  for (const name of fs.readdirSync(root)) {
    if (!/^\d+-[a-z0-9]+$/i.test(name)) continue; // deploy folders only
    const dir = path.join(root, name);
    if (keep.has(path.resolve(dir))) continue;
    if (!fs.lstatSync(dir).isDirectory()) continue;
    fs.rmSync(dir, { recursive: true, force: true });
    console.log(`prune-deploys: removed old deploy ${name}`);
  }
} catch (err) {
  console.warn("prune-deploys: skipped", err && err.message);
}
