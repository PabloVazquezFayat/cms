const express = require('express');
const router = express.Router();
const componentCreate = require('../controllers/component/component-create');
const componentRead = require('../controllers/component/component-read');
const componentUpdate = require('../controllers/component/component-update');

router.get('/component/read/:id', componentRead);

// router.get('/component/read', componentReadAll);

router.post('/component/create', componentCreate);

router.put('/component/update', componentUpdate);

// router.delete('/', componentDelete);

module.exports = router;