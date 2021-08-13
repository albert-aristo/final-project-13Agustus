const router = require('express').Router();
const Controller = require('../controller/transaction');

router.get('/', Controller.basic);

router.get('/add', Controller.TransaksiPage);

router.post('/add', Controller.Transaksi);

module.exports = router;