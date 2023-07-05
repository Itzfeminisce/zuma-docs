const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    console.log(req.headers)
    res.json({msg:"Authenticed", sessionId:Math.random()})
});


module.exports = router;
