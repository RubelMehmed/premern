import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send a POST request to create a new post on your server
    axios.post('http://localhost:5000/api/posts', newPost)
      .then((response) => {
        console.log('New post created:', response.data);
        
        // Clear the input fields after successful submission
        setNewPost({
          title: '',
          content: '',
        });
        
        // Navigate to the home page
        navigate('/');
      })
      .catch((error) => {
        console.error('Error creating post:', error);
      });
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={newPost.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            name="content"
            value={newPost.content}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;



