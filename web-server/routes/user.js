const express = require('express');
const router = express.Router();

/* GET home page. */
router.post('/login', function(req, res, next) {
  console.log('[USER LOGIN DATA]', req.body);
  //Add code for authentication
  res.send(req.body);
});

module.exports = router;
