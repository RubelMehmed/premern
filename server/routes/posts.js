// routes/posts.js
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Define your routes here (e.g., GET, POST, PUT, PATCH, DELETE)
// routes/posts.js
// ...

// Create a new post
router.post('/', async (req, res) => {
    try {
      const post = new Post(req.body);
      await post.save();
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Fetch all posts
  router.get('/', async (req, res) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // ...

  // routes/posts.js
// ...

// Update a post
router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true });
      res.json(updatedPost);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Delete a post
  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Post.findByIdAndDelete(id);
      res.json({ message: 'Post deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // ...