const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const blogsFilePath = path.join(process.cwd(), 'server', 'blogs.json');

  fs.readFile(blogsFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading blogs data');
      return;
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
};
