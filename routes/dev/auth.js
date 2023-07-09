const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
 return res.render(`register`,{metadata:req.metadata})
})
.post((req,res)=>{
    
});
router.get('/in', function(req, res) {
 return res.render(`login`,{metadata:req.metadata})
});
router.get('/out', function(req, res) {
 return res.render(`logout`,{metadata:req.metadata})
});



module.exports = router;
