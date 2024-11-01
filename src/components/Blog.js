import React, { useState, useEffect } from 'react';
import CommentSection from './CommentSection';
import BlogHeader from './BlogHeader';
import Footer from './Footer';
import supabase from './supabaseClient';
import Post from './Post';

const Blog = ({ title, content, image }) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("Post") // Ensure the table name is correct
        .select('id, title, content, image, author, likes');

      if (error) {
        console.error('Error fetching posts:', error);
      } else {
        setPosts(data);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <BlogHeader />
      
      <div className="container">
        <h3>AppTea Blog</h3>
        {posts.map(post => (
          <Post key={post.id}
            author={post.author}
            title={post.title}
            likes={post.likes}
            content={post.content} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Blog;