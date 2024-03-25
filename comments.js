// Create web server
const express = require('express');
const app = express();

// Create a variable to store the comments
let comments = [];

// Create a POST route that will add a new comment
app.post('/comments', (req, res) => {
  // Get the new comment from the request body
  let newComment = req.body;

  // Add the new comment to the comments array
  comments.push(newComment);

  // Send the new comment back in the response
  res.send(newComment);
});

// Create a GET route that will return all the comments
app.get('/comments', (req, res) => {
  // Send back the comments array in the response
  res.send(comments);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Path: index.js
// Create a new comment
let newComment = {
  id: 1,
  text: 'This is a comment',