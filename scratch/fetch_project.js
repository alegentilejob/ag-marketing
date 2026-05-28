const sseUrl = "https://mcp.unframer.co/mcp?id=ce788066ed6270d83b42a00583421b43ac82dbf8883ebc85b62763058c9f1501&secret=xdBxgYjfzZq9FogCZYDMKfgoPIUfhaOz";
const fs = require('fs');
const path = require('path');

async function makePost(method, params, id) {
  const response = await fetch(sseUrl, {
    method: "POST",
    headers: {
      "Accept": "application/json, text/event-stream",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method,
      params,
      id
    })
  });
  return response.json();
}

async function run() {
  console.log("Initializing...");
  await makePost("initialize", {
    protocolVersion: "2024-11-05",
    capabilities: {},
    clientInfo: { name: "Antigravity", version: "1.0.0" }
  }, 1);

  console.log("Calling getProjectXml...");
  const result = await makePost("tools/call", {
    name: "getProjectXml",
    arguments: {}
  }, 2);

  const outputPath = path.join(__dirname, "framer_project.json");
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf-8');
  console.log("Successfully wrote project XML to scratch/framer_project.json!");
}

run().catch(console.error);
