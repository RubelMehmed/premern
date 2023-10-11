const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('./db'); // Import the mongoose connection setup
const postRoutes = require('./routes/posts'); // Import the routes

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Include the post routes
app.use('/api', postRoutes);

const port = process.env.PORT || 5000;

mongoose.connection.once('open', () => {
  console.log('MongoDB connected successfully');
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
