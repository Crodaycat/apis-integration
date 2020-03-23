const axios = require('axios').default;

const quotesAPIConfig = axios.create({
  baseURL: process.env.QUOTES_API_URL,
  headers: {
    'x-rapidapi-host': process.env.QUOTES_API_HOST,
    'x-rapidapi-key': process.env.QUOTES_API_KEY
  }
});

module.exports = quotesAPIConfig;
