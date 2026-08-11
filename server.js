const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

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

// Day 2: Users endpoint
app.get("/users", (req, res) => {
    const users = [
        { id: 1, name: "Rahul", role: "Developer" },
        { id: 2, name: "Priya", role: "Designer" }
    ];

    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});