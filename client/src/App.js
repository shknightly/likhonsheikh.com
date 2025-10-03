import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://prosternal-annalise-lauroyl.ngrok-free.dev/api/blogs')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Blogs</h1>
      </header>
      <div className="blogs-container">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-post">
            <h2>{blog.title}</h2>
            <p><strong>By: {blog.author}</strong></p>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
