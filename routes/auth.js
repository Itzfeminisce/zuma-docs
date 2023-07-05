const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
 return res.render(`register`,{metadata:req.metadata})
});
router.get('/in', function(req, res) {
 return res.render(`login`,{metadata:req.metadata})
});
router.get('/out', function(req, res) {
 return res.render(`logout`,{metadata:req.metadata})
});

router.get('/configuration', function(req, res) {
 return res.render(`./v${req.metadata.version}/configuration`,{metadata:req.metadata})
});


module.exports = router;
