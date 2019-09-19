const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/about-bitcoin', function(req, res, next) {
  axios
    .get(
      'https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-19&sortBy=publishedAt&apiKey=286c0777be5e4fafb693b32fb739f080'
    )
    .then(function(response) {
      res.send(response.data);
    })
    .catch(function(error) {
      // handle error
      console.log('[ERROR FETCHING NEWS DATA]', error);
      res.status(500).json(error);
    });
});

module.exports = router;
