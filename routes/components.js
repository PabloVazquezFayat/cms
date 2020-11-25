const express = require('express');
const router = express.Router();
const componentRead = require('../controllers/component/component-read');
const componentCreate = require('../controllers/component/component-create');

router.get('/component/read/:id', componentRead);

// router.get('/component/read', componentReadAll);

router.post('/component/create', componentCreate);

// router.put('/', componentUpdate);

// router.delete('/', componentDelete);

module.exports = router;