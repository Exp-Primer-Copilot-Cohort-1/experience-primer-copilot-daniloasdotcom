// Create web server
// Run the server
// Create a new comment
// Get all comments
// Get a comment
// Update a comment
// Delete a comment

// Create web server
const express = require('express');
const app = express();
app.use(express.json());

// Run the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Create a new comment
const comments = [];

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.send('Created a new comment');
});

// Get all comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Get a comment
app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments[id];
  res.send(comment);
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const newComment = req.body;
  comments[id] = newComment;
  res.send('Updated a comment');
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  comments.splice(id, 1);
  res.send('Deleted a comment');
});