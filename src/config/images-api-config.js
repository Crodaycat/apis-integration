const axios = require('axios').default;

const imagesAPIConfig = axios.create({
  baseURL: process.env.IMAGES_API_URL,
  params: {
    key: process.env.IMAGES_API_KEY,
    cx: process.env.IMAGES_API_CX,
    searchType: 'image'
  }
});

module.exports = imagesAPIConfig;
