const express = require('express');
const router = express.Router();

const controller = require('../controller/Cmarket');

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get all market data
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Internal server error
 */
router.get('/', controller.market);
router.get('/write', controller.getWrite);
router.get('/:id', controller.getView);

router.post('/write', controller.addPost);

module.exports = router;