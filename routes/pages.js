const express = require('express');
const router = express.Router();
const pageCreate = require('../controllers/page/page-create');
const pageRead = require('../controllers/page/page-read');
const pageUpdate = require('../controllers/page/page-update');

router.post('/page/create', pageCreate);

router.get('/page/read/:id', pageRead);

router.put('/page/update', pageUpdate);

module.exports = router;