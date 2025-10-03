const { Pool } = require('pg');

module.exports = async (req, res) => {
  const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  });

  try {
    const result = await pool.query('SELECT * FROM blogs');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error reading blogs data');
  }
};