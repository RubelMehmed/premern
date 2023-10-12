// models/Post.js

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

// Specify a custom collection name__________premern-blogs

const Post = mongoose.model('Post', postSchema, 'premern-blogs');
module.exports = Post;


// module.exports = mongoose.model('Post', postSchema);




