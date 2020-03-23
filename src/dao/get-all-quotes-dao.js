const pool = require('../config/db-config');

const DatabaseError = require('../errors/database-error');

const getAllQuotesDao = async (limit = 20, offset = 0) => {
  const poolPromise = pool.promise();

  let results;

  try {
    [
      results
    ] = await poolPromise.query(
      'SELECT id, quote, image FROM quote ORDER BY id DESC LIMIT ? OFFSET ?',
      [limit, offset]
    );
  } catch (error) {
    throw new DatabaseError(error);
  }

  return results;
};

module.exports = getAllQuotesDao;
