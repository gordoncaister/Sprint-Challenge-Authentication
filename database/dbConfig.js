const knex = require('knex');

const knexConfig = require('../knexfile.js');

const environment = process.env.DBASE_ENV || "development";

module.exports = knex(knexConfig[environment]);
