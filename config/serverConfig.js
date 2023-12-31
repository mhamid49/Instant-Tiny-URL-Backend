require('dotenv').config();

module.exports = {
  host: process.env.HOST || 'http://localhost',
  port: process.env.PORT || 3000,
  baseURL: `${process.env.HOST || 'http://localhost'}:${process.env.PORT || 3000}`
};