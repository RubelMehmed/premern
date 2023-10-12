import axios from 'axios';
import { useEffect, useState } from 'react';

function ReadPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch all blog posts from your server
    axios.get('http://localhost:5000/api/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReadPosts;

