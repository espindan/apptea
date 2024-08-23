import React, { useState, useEffect } from 'react';
import Post from './Post';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://zkhendzouvpqpuzphbpv.supabase.co'; // Replace with your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpraGVuZHpvdXZwcXB1enBoYnB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQwMTIyNzMsImV4cCI6MjAzOTU4ODI3M30.FWoyZEqpWwsliIiRAtlGpi9gBDAA89r1EKjCge6U3y8'; // Replace with your Supabase anon key
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("Post") // Ensure the table name is correct
        .select('title, content'); // Use correct select syntax

      if (error) {
        console.error('Error fetching posts:', error);
      } else {
        setPosts(data);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h1>All discussions</h1>
      {posts.map(post => (
        <Post key={post.content} 
            title={post.title} 
            content={post.content} />
      ))}
    </div>
  );
};

export default Blog;

