const express = require('express');
const app = express();
var morgan = require('morgan');

const path = require('path');
const publicDirectoryPath = path.join(__dirname, './public');

// logging HTTP requests
app.use(morgan('combined'));

// Middleware to parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
  res.send('hello world');
});

// Handle undefined routes
app.get('/*', (req, res) => {
  return res.status(404).json({
    status: 'failed',
    message: 'Data Not Found',
  });
});

// Error-handling middleware to catch all errors
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode;
  err.status = err.status;
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

// export the module
module.exports = app;
