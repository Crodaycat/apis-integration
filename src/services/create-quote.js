const getQuoteService = require('../apis/quotes-api/get-quote');
const getImageService = require('../apis/images-api/get-image');
const createQuoteDao = require('../dao/create-quote-dao');

const generateQuote = async (req, res) => {
  const resQuote = await getQuoteService();

  const image = await getImageService(resQuote.quote);

  const savedQuote = createQuoteDao(resQuote.quote, image);

  res.send(savedQuote);
};

module.exports = generateQuote;
