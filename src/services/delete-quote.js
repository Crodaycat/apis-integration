const deleteQuoteDao = require('../dao/delete-quote-dao');
const PropertyRequiedError = require('../errors/property-required-error');

const deleteQuote = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id) || 0;

    if (!id) {
      throw new PropertyRequiedError('id');
    }

    const deletedQuote = await deleteQuoteDao(id);

    res.send(deletedQuote);
  } catch (error) {
    next(error, req, res, next);
  }
};

module.exports = deleteQuote;
