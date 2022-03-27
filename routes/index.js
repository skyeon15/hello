var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).render('index', { title: '에케' });
});

router.get('/karaoke', function (req, res, next) {
  res.status(200).render('karaoke');
});

router.get('/karaoke/request', function (req, res, next) {
  res.status(200).render('karaoke_request');
});

module.exports = router;
