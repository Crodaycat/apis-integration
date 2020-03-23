const pool = require('../config/db-config');

const NotFoundError = require('../errors/not-found-error');
const DatabaseError = require('../errors/database-error');

const deleteQuoteDao = async id => {
  const poolPromise = pool.promise();
  let connection;

  let deleted;

  try {
    connection = await poolPromise.getConnection();

    const [
      result
    ] = await connection.query(
      'SELECT id, quote, image FROM quote WHERE id = ?',
      [id]
    );

    if (result.length < 1) {
      connection.release();
      throw new NotFoundError('La frase que desea borrar no existe.');
    }

    deleted = result[0];

    const [
      deleteResult
    ] = await poolPromise.query('DELETE FROM quote WHERE id = ?', [id]);

    if (!deleteResult.affectedRows) {
      connection.release();
      throw new NotFoundError('No se ha podido borrar la frase.');
    }
  } catch (error) {
    if (connection) {
      connection.release();
    }

    if (error.name === 'Error') {
      throw new DatabaseError(error);
    }

    throw error;
  }

  return deleted;
};

module.exports = deleteQuoteDao;
