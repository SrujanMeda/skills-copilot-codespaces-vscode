// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const commentsPath = path.join(__dirname, 'comments.json');

// Middleware for parsing request body
app.use(bodyParser.json());

// GET request to get all comments
app.get('/comments', (req, res) => {
  fs.readFile(commentsPath, (err, data) => {
    if (err) {
      res.status(500).send('Error reading comments.json');
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// POST request to add a comment
app.post('/comments', (req, res) => {
  fs.readFile(commentsPath, (err, data) => {
    if (err) {
      res.status(500).send('Error reading comments.json');
    } else {
      const comments = JSON.parse(data);
      comments.push(req.body);
      fs.writeFile(commentsPath, JSON.stringify(comments, null, 2), (err) => {
        if (err) {
          res.status(500).send('Error writing comments.json');
        } else {
          res.status(201).send('Comment added');
        }
      });
    }
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
