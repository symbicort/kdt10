// 라우터 연결 
const express = require('express');
const router = express.Router();
// controller 파일
const controller = require('../controller/Cuser');

router.get('/', controller.userinfo);

module.exports = router;
