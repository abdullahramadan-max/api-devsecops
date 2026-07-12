const express = require("express");

const router = express.Router();

router.get("/user", (req, res) => {

    const id = req.query.id;

    const sql =
        "SELECT * FROM users WHERE id=" + id;

    res.json({
        query: sql
    });

});

module.exports = router;