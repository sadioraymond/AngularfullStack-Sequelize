'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/sequelize-dev'
  },

  // Postgres connection options
  /*postgres: {
    uri: process.env.POSTGRES_URL ||
    'postgres://user:pass@localhost:5432/sequelize'
  },*/
  mysql: {
    uri: 'mysql://user:mdp@host:port/bd'
  },
  database: 'bd',
  username: 'user',
  password: 'mdp',
  seedDB: true
};
