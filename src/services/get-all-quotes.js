const getAllQuotesDao = require('../dao/get-all-quotes-dao');

const getAllQuotes = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || undefined;
    const offset = parseInt(req.query.offset) || undefined;

    const searchedQuotes = await getAllQuotesDao(limit, offset);

    res.send(searchedQuotes);
  } catch (error) {
    next(error, req, res, next);
  }
};

module.exports = getAllQuotes;
