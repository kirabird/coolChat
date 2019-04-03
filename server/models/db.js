const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://student:12345@localhost:5432/coolchat',
});

pool.on('connect', () => {
  console.log('we are connected to the db');
});

module.exports = {
  query: (text, params, cb) => pool.query(text, params, cb),
};
