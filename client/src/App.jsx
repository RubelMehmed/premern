import './App.css';

import { BrowserRouter as Router, Link, Outlet, Route } from 'react-router-dom';

import CreatePost from './components/CreatePost';
import DeletePost from './components/DeletePost';
import Home from './components/Home';
import ReadPosts from './components/ReadPosts';
import UpdatePost from './components/UpdatePost';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create Post</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route path="/" element={<Home />} /> {/* Use the Home component for the home page */}
        <Route path="/create" element={<CreatePost />} />
        <Route path="/update" element={<UpdatePost />} />
        <Route path="/delete" element={<DeletePost />} />
        <Route path="/post/:postId" element={<Outlet />}>
          <Route path="/" element={<ReadPosts />} />
          <Route path="/edit" element={<UpdatePost />} />
          <Route path="/remove" element={<DeletePost />} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
