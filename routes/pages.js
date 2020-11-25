const express = require('express');
const router = express.Router();
const pageCreate = require('../controllers/page/page-create');
const pageUpdate = require('../controllers/page/page-update');

router.post('/page/create', pageCreate);

router.put('/page/update', pageUpdate);

module.exports = router;