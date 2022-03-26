const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const createAccountLimiter = require('../middleware/security');
const apiLimiter = require('../middleware/security');

const password = require('../middleware/password');


router.post('/signup', password, createAccountLimiter, userCtrl.signup);
router.post('/login', apiLimiter,userCtrl.login);

module.exports = router;