
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api/blogs', (req, res) => {
  fs.readFile(path.join(__dirname, 'blogs.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading blogs data');
      return;
    }
    res.send(data);
  });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*_response', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
