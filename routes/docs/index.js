const express = require('express');
const router = express.Router({mergeParams:true});

/* GET home page. */
router.get('/?', function(req, res) {
    const {version} = req.params
 return res.render(`./${version}/index`,{metadata:req.metadata})
});

router.get('/configuration', function(req, res) {
    const {version} = req.params
 return res.render(`./${version}/configuration`,{metadata:req.metadata})
});


module.exports = router;
