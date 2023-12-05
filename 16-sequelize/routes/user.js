const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

router.get('/', controller.main);

router.get('/signup', controller.viewSignup);
router.post('/signup', controller.signup);

router.get('/signin', controller.viewSignin);
router.post('/signin', controller.signin);

router.get('/profile',controller.viewProfile);

router.patch('/profile/edit', controller.edit_profile);

// // DELETE /visitor - 하나 삭제
router.delete('/profile/delete', controller.delete_profile);

module.exports = router;