// Author: Stella Massa
// Date: 2022-02
//Student id:301207800

var express = require('express');
var router = express.Router();
let servicesController = require('../controllers/services')

router.get('/', servicesController.home);

module.exports = router;
