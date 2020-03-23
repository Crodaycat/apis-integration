const getQuoteService = require('../apis/get-quote');
const getImageService = require('../apis/get-image');
const createQuoteDao = require('../dao/create-quote-dao');

const generateQuote = async (req, res, next) => {
  try {
    const resQuote = await getQuoteService();

    const image = await getImageService(resQuote.quote);

    const savedQuote = await createQuoteDao(resQuote.quote, image);

    res.send(savedQuote);
  } catch (error) {
    next(error, req, res, next);
  }
};

module.exports = generateQuote;
