const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/?', function(req, res) {
  return res.render('./index.ejs', { title: 'Express', metadata:req.metadata });
});
router.get('/docs/?', function(req, res) {
 return res.render("./start.ejs")
});

module.exports = router;
