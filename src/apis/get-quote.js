const quotesAPIConfig = require('../config/quotes-api-config');

const NotFoundError = require('../errors/not-found-error');
const APIRequestError = require('../errors/api-request-error');

const getQuoteService = async () => {
  return await quotesAPIConfig
    .get('', {
      params: {
        cat: 'famous',
        count: 1
      }
    })
    .then(response => {
      const data = response.data;

      if (data.length < 1) {
        throw new NotFoundError('No se ha podido generar una nueva frase.');
      }

      return data[0];
    })
    .catch(error => {
      if (error.response && error.reponse.data) {
        throw new APIRequestError(
          'Error al generar una nueva frase.',
          error.response.data
        );
      }

      throw error;
    });
};

module.exports = getQuoteService;
