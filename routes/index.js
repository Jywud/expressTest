var express = require('express');
var router = express.Router();

var home = require('../controller/home');
var about = require('../controller/about');

/* GET home page. */
router.get(/(^\/?$)|(^\/home\/?$)/, home.index);

router.get('/about', about.index);

module.exports = router;
