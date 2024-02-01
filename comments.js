// Create web server
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Create a route for POST /comments
// 4. Start the server
// 5. Test the server

// 1. Create a web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// 2. Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.json([
    "This is the first comment",
    "This is the second comment",
    "This is the third comment"
  ]);
});

// 3. Create a route for POST /comments
app.post('/comments', (req, res) => {
  console.log(req.body);
  res.send('You sent: ' + req.body);
});

// 4. Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// 5. Test the server
// $ curl -X POST -H "Content-Type: application/json" -d '{"body": "This is a great post"}' http://localhost:3000/comments
// You sent: [object Object]
// $ curl http://localhost:3000/comments
// ["This is the first comment","This is the second comment","This is the third comment"]