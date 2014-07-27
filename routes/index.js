var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Cocos2d-html5 Hello World test' });
});

module.exports = router;
