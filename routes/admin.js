const router = require('express').Router();
const Controller = require('../controller/admin');

router.get('/login', Controller.loginPage);

router.post('/login', Controller.loginResult);

router.get('/register', Controller.registerPage);

router.post('/register', Controller.registerResult);

router.get('/logout', Controller.logout);

module.exports = router;