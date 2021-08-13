const router = require('express').Router();
const Controller = require('../controller/item');

router.get('/', Controller.basic);

router.get('/add', Controller.addPage);

router.post('/add', Controller.addResult);

router.get('/:id/addSameItem', Controller.addItemSamaPage);

router.post('/:id/addSameItem', Controller.hasilAddItemSama);

module.exports = router;