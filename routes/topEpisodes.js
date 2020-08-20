var express = require('express');
var router = express.Router();

var {
  getTvshows,
} = require('../controllers/tvshow-controller');


router.get('/', function(req, res, next) {
  res.send('This is App is designed to get top Episodes of a TV Show .Please add tv show id in url as /id to get shows episodes list in ordered format. ');
});



router.get('/:showID', function(req, res, next) {
   next();
}, getTvshows);




module.exports = router;
