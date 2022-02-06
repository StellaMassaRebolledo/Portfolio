// Author: Stella Massa
// Date: 2022-02
//Student id:301207800

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.home);


module.exports = router;
