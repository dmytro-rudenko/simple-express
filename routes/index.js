var express = require('express');
var router = express.Router();

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/* GET home page. */
router.get('/', async function(req, res, next) {
  const date = new Date() 
  console.log(date)
  await delay(50)
  res.json({ date });
});

module.exports = router;
