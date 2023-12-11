const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');
const jwt = require('jsonwebtoken');

router.get('/', controller.main);

router.get('/signup', controller.view_signup);

router.get('/login', controller.view_login);

router.get('/profile', controller.view_profile)

router.post('/signup', controller.signup);

router.post('/login', controller.login);

router.patch('/edit', controller.user_edit);

router.delete('/delete', controller.user_delete)

module.exports = router;