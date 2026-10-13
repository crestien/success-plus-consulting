const { createServer } = require("http");
const { parse } = require("url");
const fs = require("fs");
const path = require("path");
const next = require("next");

const port = parseInt(process.env.PORT || "3000", 10);
const hostname = process.env.HOSTNAME || "0.0.0.0";
const app = next({ dev: false, hostname, port });
const handle = app.getRequestHandler();
const publicRoot = path.resolve(__dirname, "public");

const MIME = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function servePublicFile(req, res, pathname) {
  if (!pathname || pathname.includes("\0")) return false;
  if (pathname !== "/favicon.png" && !pathname.startsWith("/images/")) {
    return false;
  }

  const resolved = path.resolve(publicRoot, `.${pathname}`);
  if (resolved !== publicRoot && !resolved.startsWith(publicRoot + path.sep)) {
    return false;
  }

  let stat;
  try {
    stat = fs.statSync(resolved);
  } catch {
    return false;
  }
  if (!stat.isFile()) return false;

  const ext = path.extname(resolved).toLowerCase();
  res.writeHead(200, {
    "Content-Type": MIME[ext] || "application/octet-stream",
    "Cache-Control": "public, max-age=86400",
    "Content-Length": stat.size,
  });
  fs.createReadStream(resolved).pipe(res);
  return true;
}

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      if (servePublicFile(req, res, parsedUrl.pathname)) return;
      handle(req, res, parsedUrl);
    }).listen(port, hostname, () => {
      console.log(`Success Plus Consulting ready on http://${hostname}:${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start Next.js", err);
    process.exit(1);
  });
