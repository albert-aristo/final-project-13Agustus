const router = require('express').Router();
const Controller = require('../controller/item');

router.get('/', Controller.basic);

router.get('/add', Controller.addPage);

router.post('/add', Controller.addResult);

router.get('/addSameItem', Controller.addItemSamaPage);

router.post('/addSameItem', Controller.hasilAddItemSama);

module.exports = router;