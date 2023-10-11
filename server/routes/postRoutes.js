// postRoutes.js
const express = require('express');
const router = express.Router();
const Post = require('../models/postModel'); // Import the Post model

// Create a new blog post
router.post('/posts', async (req, res) => {
  try {
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
    });
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all blog posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a blog post by ID
router.put('/posts/:id', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title, content: req.body.content } }
    );
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a blog post's title by ID
router.patch('/posts/:id', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a blog post by ID
router.delete('/posts/:id', async (req, res) => {
  try {
    const removedPost = await Post.deleteOne({ _id: req.params.id });
    res.json(removedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;