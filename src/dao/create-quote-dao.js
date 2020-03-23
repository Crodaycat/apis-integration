const pool = require('../config/db-config');

const NotFoundError = require('../errors/not-found-error');
const DatabaseError = require('../errors/database-error');

const createQuoteDao = async (quote, image) => {
  const poolPromise = pool.promise();

  let result;

  try {
    [
      result
    ] = await poolPromise.query(
      'INSERT INTO quote (quote, image) VALUES (?, ?)',
      [quote, image]
    );
  } catch (error) {
    throw new DatabaseError(error);
  }

  if (!result.insertId) {
    throw new NotFoundError('No fue posible guardar el registro.');
  }

  return {
    id: result.insertId,
    quote,
    image
  };
};

module.exports = createQuoteDao;
