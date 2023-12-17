const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

router.get('/', controller.main);

router.get('/signup', controller.view_signup);

router.get('/login', controller.view_login);

router.get('/profile', controller.view_profile);

router.post('/signup', controller.signup);

router.post('/login', controller.login);

router.post('/profile/upload', controller.ImageUpload);

router.patch('/profile/img_edit', controller.profile_image_edit);

router.patch('/profile/edit', controller.user_edit);

router.delete('/profile/delete', controller.user_delete);

module.exports = router;