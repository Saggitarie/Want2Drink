require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || `postgres://${process.env.DBUSER}:${process.env.PGPASSWORD}@127.0.0.1:5432/want2drink`,
    migrations: {
      directory: './models/migrations'
    },
    seeds: {
      directory: './models/seeds/'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL || `postgres://${process.env.DBUSER}:${process.env.PGPASSWORD}@127.0.0.1:5432/want2drink`,
    migrations: {
      directory: './models/migrations'
    },
    seeds: {
      directory: './models/seeds/'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './models/migrations'
    },
    seeds: {
      directory: './models/seeds/'
    },
    useNullAsDefault: true
  }
}