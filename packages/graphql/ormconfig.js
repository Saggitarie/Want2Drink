require('dotenv').config();

// module.exports = {
//   type: 'postgres',
//   url: process.env.DB_URL,
//   entities: ['src/entity/*.*'],
//   synchronize: true,
//   logging: false,
//   entities: ['src/entity/**/*.ts'],
//   migrations: ['src/migration/**/*.ts'],
//   subscribers: ['src/subscriber/**/*.ts'],
//   cli: {
//     entitiesDir: 'src/entity',
//     migrationsDir: 'src/migration',
//     subscribersDir: 'src/subscriber',
//   },
//   extra: {
//     ssl: {
//       rejectUnauthorized: false,
//     },
//   },
// };

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: process.env.LOCAL_DB_PORT,
  username: process.env.LOCAL_DB_USERNAME,
  password: process.env.LOCAL_DB_PASSWORD,
  database: process.env.LOCAL_DB_DATABASE,
  synchronize: false,
  logging: false,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};
