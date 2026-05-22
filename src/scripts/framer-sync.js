const sseUrl = "https://mcp.unframer.co/mcp?id=ce788066ed6270d83b42a00583421b43ac82dbf8883ebc85b62763058c9f1501&secret=xdBxgYjfzZq9FogCZYDMKfgoPIUfhaOz";

async function run() {
    console.log("Connessione all'endpoint MCP di Framer in corso...");
    const response = await fetch(sseUrl);
    if (!response.ok) {
        throw new Error(`Errore HTTP! Stato: ${response.status}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let endpoint = null;

    console.log("Lettura dello stream SSE...");

    while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop(); // Mantieni l'ultima linea parziale

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line.startsWith("event: endpoint")) {
                const dataLine = lines[i + 1] || "";
                if (dataLine.startsWith("data:")) {
                    const relativeOrAbsoluteUrl = dataLine.replace("data:", "").trim();
                    endpoint = new URL(relativeOrAbsoluteUrl, sseUrl).toString();
                    break;
                }
            } else if (line.startsWith("data:")) {
                const potentialUrl = line.replace("data:", "").trim();
                if (potentialUrl.startsWith("http") || potentialUrl.startsWith("/")) {
                    endpoint = new URL(potentialUrl, sseUrl).toString();
                }
            }
        }

        if (endpoint) {
            console.log("Endpoint POST trovato:", endpoint);
            break;
        }
    }

    if (!endpoint) {
        console.error("Impossibile trovare l'endpoint POST nello stream SSE.");
        await reader.cancel();
        return;
    }

    console.log("Richiesta dell'elenco dei tool disponibili...");
    const listToolsPayload = {
        jsonrpc: "2.0",
        method: "tools/list",
        params: {},
        id: 1
    };

    const postResponse = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(listToolsPayload)
    });

    if (!postResponse.ok) {
        throw new Error(`Richiesta POST fallita: ${postResponse.status} ${postResponse.statusText}`);
    }

    const postData = await postResponse.json();
    console.log("\n--- TOOL DISPONIBILI NELL'MCP DI FRAMER ---");
    console.log(JSON.stringify(postData, null, 2));
    console.log("-------------------------------------------\n");

    await reader.cancel();
}

run().catch(console.error);
