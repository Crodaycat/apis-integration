const express = require('express');

const getQuote = require('./services/get-quote');
const getAllQuotes = require('./services/get-all-quotes');
const createQuote = require('./services/create-quote');
const deleteQuote = require('./services/delete-quote');

const router = express.Router();

router.get('/quotes/:id', getQuote);
router.get('/quotes', getAllQuotes);
router.post('/quotes', createQuote);
router.delete('/quotes/:id', deleteQuote);

module.exports = router;
