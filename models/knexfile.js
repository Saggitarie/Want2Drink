// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL || `postgres://kohkishiga:kohkishiga@127.0.0.1:5432/want2drink`,
    pool:{
      min: 2,
      max: 10
    },
    seeds: {
      directory: './seeds/'
    },
    migrations:{
      tableName: "knex_migrations"
    }
  },
  staging: {
    client: 'postgresql',
    connection: {
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      user: process.env.DBUSER,
      password: process.env.PGPASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      user: process.env.DBUSER,
      password: process.env.PGPASSWORD,
      ssl: true
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
