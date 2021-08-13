const router = require('express').Router();
const Controller = require('../controller/recipient');

router.get('/', Controller.basic);

router.get('/add', Controller.addPage);

router.post('/add', Controller.addResult);

router.get('/:id/delete', Controller.removePenerima);

router.get('/:id/edit', Controller.editPenerima);

router.post('/:id/edit', Controller.resultEdit);

module.exports = router;