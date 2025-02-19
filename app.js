// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// A simple logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
  next();
});

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, World! This is your first containerized app on AWS! And i have also added my first CI Pipeline');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});