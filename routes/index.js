const express = require('express');
const router = express.Router();
const pageRead = require('../controllers/page/page-read.js');

/* GET home page. */
router.get('/:id', pageRead);

module.exports = router;
