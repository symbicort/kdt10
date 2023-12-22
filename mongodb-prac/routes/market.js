const express = require('express');
const router = express.Router();

const controller = require('../controller/Cmarket');

router.get('/', controller.market);
router.get('/write', controller.getWrite);
router.get('/:id', controller.getView);

router.post('/write', controller.addPost);

module.exports = router;