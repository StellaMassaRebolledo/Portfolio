// Author: Stella Massa
// Date: 2022-02
//Student id:301207800 

var express = require('express');
var router = express.Router();
let projectsController = require('../controllers/projects')

router.get('/', projectsController.home);

module.exports = router;
