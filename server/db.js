const mongoose = require('mongoose');
require('dotenv').config(); // Import dotenv to use environment variables

const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;


// // db.js
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/myblog', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.on('connected', () => {
//   console.log('Connected to MongoDB');
// });

// mongoose.connection.on('error', (error) => {
//   console.error('MongoDB connection error:', error);
// });

// mongoose.connection.on('disconnected', () => {
//   console.log('Disconnected from MongoDB');
// });

//__________________________________________

// const { MongoClient } = require('mongodb');
// require('dotenv').config(); // Import dotenv to use environment variables

// const uri = process.env.MONGODB_URI;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// async function connectToMongoDB() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//   }
// }

// module.exports = { client, connectToMongoDB };
