// shared/db.js
const { Pool } = require('pg');
const { MongoClient } = require('mongodb');

const postgresPool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'users',
  password: 'abhiak10',
  port: 5432,
});

const mongoClient = new MongoClient('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  postgresPool,
  mongoClient,
};
