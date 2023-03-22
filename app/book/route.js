const express = require('express');
const checkAuth = require('../../middleware/checkAuth');
const { bookPurchaseHandler } = require('./handler');
const router = express.Router();

router.post('/', checkAuth, bookPurchaseHandler);

module.exports = router;