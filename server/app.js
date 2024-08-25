const express = require('express');
const app = express();
const router = require('./src/routes/api');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');
const allowedOrigins = require('./src/config/allowedOrigins');
const credentials = require('./src/middlewares/credentials');
const publicDirectoryPath = path.join(__dirname, './public');

require('dotenv').config();

// logging HTTP requests
app.use(morgan('combined'));

// Configure CORS to allow all origins

// CORS configuration function
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(credentials);

// Use CORS middleware with the configured options
app.use(cors(corsOptions));

// Middleware to parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Serve static files
app.use(express.static(publicDirectoryPath));

// Database Library Import
const mongoose = require('mongoose');

// MongoDB database connection
const mongoURI = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@stories.1n9zc.mongodb.net/?retryWrites=true&w=majority&appName=stories`;

const connectToMongo = async () => {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(mongoURI);
    console.log('Connected to Mongo Successfully!');
  } catch (error) {
    console.log(error);
  }
};

connectToMongo();

// default test route
app.get('/', (req, res) => {
  res.send('hello world');
});

// Routing Implement
app.use('/api/', router);

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
