// client/src/components/DeletePost.js
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DeletePost() {
  const [postIdToDelete, setPostIdToDelete] = useState('');
  const navigate = useNavigate();

  const handleDelete = () => {
    // Send a DELETE request to remove the post on your server
    axios.delete(`/api/posts/${postIdToDelete}`)
      .then(() => {
        console.log('Post deleted successfully');
        
        // Clear the input field after successful deletion
        setPostIdToDelete('');
        
        // Navigate to the home page or any other appropriate route
        navigate('/');
      })
      .catch((error) => {
        console.error('Error deleting post:', error);
      });
  };

  return (
    <div>
      <h2>Delete Post</h2>
      <div>
        <label>Post ID:</label>
        <input
          type="text"
          value={postIdToDelete}
          onChange={(e) => setPostIdToDelete(e.target.value)}
        />
        <button onClick={handleDelete}>Delete Post</button>
      </div>
    </div>
  );
}

export default DeletePost;



  

  
 
