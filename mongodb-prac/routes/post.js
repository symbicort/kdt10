const express = require('express');
const router = express.Router();
const controller = require('../controller/Cpost');

router.get('/', controller.view_allpost);


module.exports = router;