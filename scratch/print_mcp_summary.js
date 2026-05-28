const sseUrl = "https://mcp.unframer.co/mcp?id=ce788066ed6270d83b42a00583421b43ac82dbf8883ebc85b62763058c9f1501&secret=xdBxgYjfzZq9FogCZYDMKfgoPIUfhaOz";

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
  const initResult = await makePost("initialize", {
    protocolVersion: "2024-11-05",
    capabilities: {},
    clientInfo: { name: "Antigravity", version: "1.0.0" }
  }, 1);

  const toolsResult = await makePost("tools/list", {}, 2);
  
  console.log("SUMMARY OF AVAILABLE TOOLS:");
  toolsResult.result.tools.forEach(t => {
    console.log(`- Name: ${t.name}`);
    console.log(`  Description: ${t.description.split('\n')[0]}`);
  });
}

run().catch(console.error);
