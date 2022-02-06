// Author: Julio Vinicius
// Date: 2022-01-27

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'Home' });
});


module.exports = router;
