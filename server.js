const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Read the JSON data from db.json
const jsonData = JSON.parse(fs.readFileSync('db.json'));

// Define a route to serve the JSON data
//http://localhost:3000/api/restaurant
app.get('/api/restaurant', (req, res) => {
  res.json(jsonData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
