const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/:version', function(req, res) {
    console.log(req.metadata)
 return res.render(`./v${req.metadata.version}/index`,{metadata:req.metadata})
});


module.exports = router;
