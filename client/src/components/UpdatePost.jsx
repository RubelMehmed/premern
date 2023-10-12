
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function UpdatePost() {
  const [postToUpdate, setPostToUpdate] = useState({
    _id: '',
    title: '',
    content: '',
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Load a post for editing (you can provide a post ID)
    const postId = location.state.postId;

    axios.get(`http://localhost:5000/api/posts/${postId}`)
      .then((response) => {
        const post = response.data;
        setPostToUpdate(post);
      })
      .catch((error) => {
        console.error('Error loading post for editing:', error);
      });
  }, [location.state.postId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostToUpdate({
      ...postToUpdate,
      [name]: value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    
    // Send a PUT request to update the post on server
    axios.put(`http://localhost:5000/api/posts/${postToUpdate._id}`, postToUpdate)
      .then((response) => {
        console.log('Post updated:', response.data);
        
        // Clear the input fields after successful update
        setPostToUpdate({
          _id: '',
          title: '',
          content: '',
        });
        
        // Navigate to the home page
        navigate('/');
      })
      .catch((error) => {
        console.error('Error updating post:', error);
      });
  };

  return (
    <div>
    <h2>Edit Post</h2>
    <form onSubmit={handleUpdate}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={postToUpdate.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          name="content"
          value={postToUpdate.content}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Update Post</button>
    </form>
  </div>
  );
}

export default UpdatePost;

