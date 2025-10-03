const { Pool } = require('pg');
const { Clerk } = require('@clerk/clerk-sdk-node');

const clerk = new Clerk({ secretKey: process.env.CLERK_SECRET_KEY });

module.exports = async (req, res) => {
  const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  });

  if (req.method === 'GET') {
    const { blog_id } = req.query;
    if (!blog_id) {
      return res.status(400).send('blog_id is required');
    }
    try {
      const result = await pool.query('SELECT * FROM comments WHERE blog_id = $1 ORDER BY created_at DESC', [blog_id]);
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error reading comments');
    }
  } else if (req.method === 'POST') {
    try {
      const { blog_id, comment } = req.body;
      const { authorization } = req.headers;

      if (!authorization) {
        return res.status(401).send('Authorization header is missing');
      }

      const session = await clerk.verifyToken(authorization);

      if (!session) {
        return res.status(401).send('Invalid session token');
      }

      const { userId, firstName, lastName } = session;
      const userName = `${firstName} ${lastName}`.trim();


      if (!blog_id || !comment) {
        return res.status(400).send('blog_id and comment are required');
      }

      await pool.query('INSERT INTO comments (blog_id, user_id, user_name, comment) VALUES ($1, $2, $3, $4)', [blog_id, userId, userName, comment]);
      res.status(201).send('Comment created');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error creating comment');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
};