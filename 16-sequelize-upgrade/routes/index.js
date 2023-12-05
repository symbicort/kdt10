const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

// localhost:PORT/ 기본 주소
// router.get('/', controller.main);

// GET /players - 전체 선수 조회
router.get('/players', controller.getPlayers);

module.exports = router;