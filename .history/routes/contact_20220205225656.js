// Author: Stella Massa
// Date: 2022-02
//Student id:301207800

var express = require('express');
var router = express.Router();
let contactController = require('../controllers/contact')

router.get('/', contactController.home);

module.exports = router;
