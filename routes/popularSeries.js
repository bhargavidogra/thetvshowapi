var express = require('express');
var router = express.Router();

var {
    getPopularShows,
  } = require('../controllers/popular-seriescontroller');

/* GET users listing. */  
  
  router.get('/', function(req, res, next) {
     next();
  }, getPopularShows);

module.exports = router;
