// Tiny Node stdlib server — serves the pre-built single-file presentation.
// Used inside Keboola Data App container (python-js base image).
const http = require("http");
const fs = require("fs");
const path = require("path");

const HTML_PATH = path.join(__dirname, "deploy", "presentation.html");
const PORT = process.env.PORT ? Number(process.env.PORT) : 8050;

let HTML;
try {
  HTML = fs.readFileSync(HTML_PATH, "utf8");
  console.log(`Loaded presentation (${(HTML.length / 1024).toFixed(1)} KB) from ${HTML_PATH}`);
} catch (err) {
  console.error(`FATAL: cannot read ${HTML_PATH}`, err);
  process.exit(1);
}

const server = http.createServer((req, res) => {
  // Keboola platform sends POST / as a health check on startup — respond with the page.
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "public, max-age=300",
  });
  res.end(HTML);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Presentation server listening on 0.0.0.0:${PORT}`);
});
