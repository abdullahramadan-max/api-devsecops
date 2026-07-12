const express = require("express");
const router = express.Router();
const exec = require("child_process").exec;

// Command Injection
router.get("/ping", (req, res) => {
    exec(req.query.host);
    res.send("done");
});

// Reflected XSS
router.get("/search", (req, res) => {
    res.send(req.query.q);
});

// Information Disclosure
router.use((req, res, next) => {
    console.log(req.headers.authorization);
    next();
});

module.exports = router;