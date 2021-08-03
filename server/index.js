const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

// Create Express Server
const app = express();

//Cors
app.use(cors());

// Configuration
const PORT = 3000;
const HOST = "localhost";
const API_SERVICE_URL = "https://zcctunji.zendesk.com/api/v2/tickets.json";

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

app.use(
  "/2",
  createProxyMiddleware({
    target: API_SERVICE_URL+"?page=2",
    changeOrigin: true
  })
);

// Start the Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
 });