const express = require("express");
const { exec } = require("child_process");

const router = express.Router();

router.get("/ping", (req, res) => {
    exec(req.query.host);

    res.send("done");
});

module.exports = router;