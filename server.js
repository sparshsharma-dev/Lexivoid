const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const DIR = __dirname;
const MKEY = "jBNvhHNbQ4PITjwJ4ohuQoJ4KcgeFlAK";

const MIME = {
  ".html": "text/html", ".css": "text/css", ".js": "application/javascript",
  ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg",
  ".svg": "image/svg+xml", ".ico": "image/x-icon", ".woff2": "font/woff2"
};

function serveStatic(req, res) {
  let fp = path.join(DIR, req.url === "/" ? "index.html" : req.url.split("?")[0]);
  if (!fs.existsSync(fp)) { res.writeHead(404); res.end("Not found"); return; }
  if (fs.statSync(fp).isDirectory()) fp = path.join(fp, "index.html");
  const ext = path.extname(fp);
  res.writeHead(200, {
    "Content-Type": MIME[ext] || "application/octet-stream",
    "Cache-Control": "no-cache"
  });
  fs.createReadStream(fp).pipe(res);
}

function proxyMistral(req, res) {
  let body = "";
  req.on("data", c => body += c);
  req.on("end", () => {
    const opts = {
      hostname: "api.mistral.ai",
      path: "/v1/chat/completions",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + MKEY,
        "Content-Length": Buffer.byteLength(body)
      }
    };
    const proxy = https.request(opts, pRes => {
      let data = "";
      pRes.on("data", c => data += c);
      pRes.on("end", () => {
        res.writeHead(pRes.statusCode, {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        });
        res.end(data);
      });
    });
    proxy.on("error", e => {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: e.message }));
    });
    proxy.write(body);
    proxy.end();
  });
}

const server = http.createServer((req, res) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    });
    res.end();
    return;
  }

  if (req.method === "POST" && req.url === "/api/enhance") {
    proxyMistral(req, res);
  } else {
    serveStatic(req, res);
  }
});

server.listen(PORT, () => {
  console.log(`\n  ✦ The Void Between Words\n  → http://localhost:${PORT}\n`);
});
