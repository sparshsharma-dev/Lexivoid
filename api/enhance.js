const https = require("https");

const MKEY = process.env.MISTRAL_KEY || "jBNvhHNbQ4PITjwJ4ohuQoJ4KcgeFlAK";

module.exports = (req, res) => {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const body = JSON.stringify(req.body);

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
      res.status(pRes.statusCode).json(JSON.parse(data));
    });
  });

  proxy.on("error", e => {
    res.status(500).json({ error: e.message });
  });

  proxy.write(body);
  proxy.end();
};
