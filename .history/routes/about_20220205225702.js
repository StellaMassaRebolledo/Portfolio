// Author: Stella Massa
// Date: 2022-02
//Student id:301207800

var express = require('express');
var router = express.Router();
let aboutController = require('../controllers/about')

router.get('/', aboutController.home);

module.exports = router;
