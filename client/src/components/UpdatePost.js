// client/src/components/UpdatePost.js
import { useEffect, useState } from 'react';

function UpdatePost() {
  const [postToUpdate, setPostToUpdate] = useState({
    _id: '', // The ID of the post to update
    title: '',
    content: '',
  });

  useEffect(() => {
    // Load a post for editing (you can provide a post ID)

    // Use the fetched post data to set the initial state of postToUpdate
  }, []); // Make sure to provide a valid post ID

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostToUpdate({
      ...postToUpdate,
      [name]: value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Send a PUT request to update the post on your server

    // After successful update, you can navigate to another route, e.g., the home page.
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
