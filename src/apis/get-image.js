const imagesAPIConfig = require('../config/quotes-api-config');

const NotFoundError = require('../errors/not-found-error');
const APIRequestError = require('../errors/api-request-error');

const getImageService = async query => {
  return await imagesAPIConfig
    .get('', {
      params: {
        q: query,
        num: 1
      }
    })
    .then(response => {
      const items = response.data.items;

      if (items.length < 1) {
        throw new NotFoundError(
          'No se ha podido generar una imagen para la frase.'
        );
      }

      return items[0].link;
    })
    .catch(error => {
      if (error.response && error.reponse.data) {
        throw new APIRequestError(
          'Error al obtener una imagen de la api.',
          error.response.data
        );
      }

      throw error;
    });
};

module.exports = getImageService;
