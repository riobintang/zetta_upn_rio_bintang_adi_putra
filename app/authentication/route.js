const express = require('express');
const { loginAuth } = require('./handler');
const router = express.Router();


router.get("/", loginAuth);

module.exports = router;