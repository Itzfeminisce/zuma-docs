const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/?", function (req, res) {
    return res.render(`dashboard`, { metadata: req.metadata, path:"api-keys"});
});

module.exports = router;
