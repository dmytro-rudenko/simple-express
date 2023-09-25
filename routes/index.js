var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const date = new Date() 
  console.log(date)
  res.json({ date });
});

module.exports = router;
