const express = require('express');

const getQuote = require('./services/get-quote');
const createQuote = require('./services/create-quote');

const router = express.Router();

router.get('/quotes/:id', getQuote);
router.post('/quotes', createQuote);

module.exports = router;
