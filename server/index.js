const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");

// Create Express Server
const app = express();

// Configuration
const PORT = 3000;
const HOST = "localhost";
const API_SERVICE_URL = "https://zcctunji.zendesk.com/api/v2/tickets";

// Logging
app.use(morgan("dev"));

// Info GET endpoint
app.get("/info", (req, res, next) => {
  res.send("This is a proxy service which proxies to Zendesk Ticket APIs.");
});

// Proxy endpoints
app.use(
  "/",
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true
  })
);

// Start the Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
 });