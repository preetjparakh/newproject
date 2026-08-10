const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.json({
        message: "API is running",
        status: "healthy"
    });
});

app.get("/health", (req, res) => {
    res.json({
        uptime: process.uptime(),
        status: "OK"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});