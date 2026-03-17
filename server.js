import { WebSocketServer, WebSocket } from "ws";

const PORT = process.env.PORT || 10000;
const wss = new WebSocketServer({ port: PORT });

console.log(`WebSocket server running on port ${PORT}`);

wss.on("connection", (ws) => {
  console.log("✅ client connected");

  ws.on("message", (message) => {
    const msg = message.toString();
    console.log("📩 received:", msg);

    // 接続中の全クライアントへブロードキャスト
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg);
      }
    });
  });

  ws.on("close", () => {
    console.log("🔌 client disconnected");
  });

  ws.on("error", (err) => {
    console.error("❌ websocket error:", err);
  });
});
