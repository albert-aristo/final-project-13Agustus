const router = require('express').Router();
const Controller = require('../controller/admin');
const { checkLogin , notLogin } = require('../middlewares/checkLogin');

router.get('/login', notLogin, Controller.loginPage);

router.post('/login', notLogin, Controller.loginResult);

router.get('/register', notLogin, Controller.registerPage);

router.post('/register', notLogin, Controller.registerResult);

router.get('/logout', checkLogin, Controller.logout);

module.exports = router;