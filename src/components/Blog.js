import React, { useState, useEffect } from 'react';
import Post from './Post';
import supabase from './supabaseClient';
import Header from './Header';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("Post") // Ensure the table name is correct
        .select('title, content, image'); // Use correct select syntax

      if (error) {
        console.error('Error fetching posts:', error);
      } else {
        setPosts(data);
      }
    };

    fetchPosts();
  }, []);

  return (

    <div className="App">
      
    <Header />

    <div className="container">
      <h3>Aportes sobre experiencias</h3>
      {posts.map(post => (
        <Post key={post.content} 
            title={post.title} 
            image={post.image}
            content={post.content} />
      ))}
    </div>
    </div>
  );
};

export default Blog;

