const express = require('express');

const createQuote = require('./services/create-quote');

const router = express.Router();

router.post('/quotes', createQuote);

module.exports = router;
